/**
 * NavigationLoader类 - 负责加载和渲染导航数据
 * 这个类处理导航数据的渲染、展开/收起功能的设置以及错误处理
 */
class NavigationLoader {
  /**
   * 构造函数 - 初始化导航加载器
   * 获取导航容器元素的引用，用于后续内容渲染
   */
  constructor() {
    // 获取导航容器DOM元素的引用
    this.container = document.getElementById("navContainer");
  }

  /**
   * load方法 - 加载并渲染导航数据
   * 尝试渲染导航数据并设置展开/收起功能，如果失败则显示错误信息
   */
  load() {
    try {
      // 使用navData（全局变量）渲染导航内容
      this.render(navData);
      // 设置展开/收起功能的事件监听器
      this.setupExpandToggle();
    } catch (error) {
      // 如果渲染过程中出现错误，记录到控制台
      console.error("加载失败:", error);
      // 显示用户友好的错误信息
      this.showError();
    }
  }

  /**
   * render方法 - 根据导航数据生成HTML并渲染到页面
   * @param {Object} navData - 包含分组和链接信息的导航数据对象
   */
  render(navData) {
    // 初始化HTML字符串，开始创建分组容器
    let html = `<div class="groups-container">`;

    // 遍历每个分组，生成对应的HTML结构
    navData.groups.forEach((group, index) => {
      // 为每个分组创建内容块和标题
      html += `
        <div class="content-block group-item">
          <h2 class="group-title">${group.title}`;

      // 如果分组有备注信息，添加备注标签
      if (group.note) {
        html += `<span class="group-note">← ${group.note}</span>`;
      }

      // 关闭标题标签，开始创建链接容器
      // 如果链接数量超过5个，添加collapsed类用于初始折叠显示
      html += `</h2>
          <div class="links ${group.links.length > 5 ? 'collapsed' : ''}">
            ${group.links.map(link => this.createLinkItem(link)).join('')}
            ${group.links.length > 5 ? '<div class="expand-toggle"></div>' : ''}
          </div>
        </div>`;
    });

    // 将生成的HTML设置到容器元素中
    this.container.innerHTML = html + `</div>`;
  }

  /**
   * createLinkItem方法 - 创建单个链接项的HTML
   * @param {Object} link - 包含链接信息的对象（url, icon, name, desc）
   * @returns {string} 生成的链接项HTML字符串
   */
  createLinkItem(link) {
    // 如果链接有描述，创建描述HTML，否则为空字符串
    const descHtml = `<div class=\"link.desc\">${link.desc || ''}</div>`;
    
    // 返回完整的链接项HTML结构
    return `
      <a href="${link.url}" target="_blank" class="link-item">
        <img src="${link.icon}" alt="${link.name}图标" loading="lazy" class="link-icon">
        <div class="link-text">
          <div class="link-name">${link.name}</div>
          ${descHtml}
        </div>
      </a>`;
  }

  /**
   * setupExpandToggle方法 - 设置展开/收起功能的事件监听器
   * 实现一次只能展开一个目录的功能，点击展开按钮时会自动收起其他已展开的目录
   */
  setupExpandToggle() {
    // 获取所有展开/收起按钮
    const toggles = document.querySelectorAll('.expand-toggle');
    
    // 为每个按钮添加点击事件监听器
    toggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        // 获取当前点击按钮的父元素（链接容器）
        const currentLinks = this.parentElement;
        // 获取所有已展开的链接容器
        const expandedLinks = document.querySelectorAll('.links.expanded');
        
        // 如果当前容器已经展开，则切换其展开状态（即收起）
        if (currentLinks.classList.contains('expanded')) {
          currentLinks.classList.remove('expanded');
        } else {
          // 否则，先收起所有已展开的容器
          expandedLinks.forEach(links => {
            links.classList.remove('expanded');
          });
          // 然后展开当前容器
          currentLinks.classList.add('expanded');
        }
      });
    });
  }

  /**
   * showError方法 - 显示错误信息
   * 当导航数据加载或渲染失败时，在容器中显示友好的错误提示
   */
  showError() {
    // 在容器中插入错误提示HTML
    this.container.innerHTML = `
      <div class="content-block">
        <p>⚠️ 数据加载失败，请检查链接或图标路径。</p>
      </div>`;
  }
}

// ===== 主题切换逻辑 =====
/**
 * 主题切换功能 - 实现深色/浅色主题的切换
 * 包括主题状态的保存、恢复和切换功能
 */

// 获取主题切换按钮元素
const themeToggle = document.getElementById("themeToggle");

// 检查本地存储是否有用户的主题偏好设置
const isLightMode = localStorage.getItem("theme") === "light";

// 根据用户偏好初始化页面主题状态
if (isLightMode) {
  // 如果用户偏好浅色主题，添加light-mode类
  document.body.classList.add("light-mode");
  // 设置主题切换按钮为月亮图标（表示可以切换到深色模式）
  themeToggle.textContent = "🌙";
} else {
  // 如果用户偏好深色主题或没有设置，使用夜间背景图片
  document.body.style.backgroundImage = "var(--bg-image-night)";
}

/**
 * toggleTheme函数 - 切换页面主题
 * 在深色和浅色主题之间切换，更新背景图片、保存用户偏好并更新按钮图标
 */
function toggleTheme() {
  // 检查当前是否为浅色模式，如果不是则切换为浅色模式
  const isLight = !document.body.classList.contains("light-mode");
  // 根据isLight切换body的light-mode类
  document.body.classList.toggle("light-mode", isLight);
  // 根据主题设置相应的背景图片
  document.body.style.backgroundImage = isLight 
    ? "var(--bg-image-day)" 
    : "var(--bg-image-night)";
  // 将用户的主题偏好保存到本地存储
  localStorage.setItem("theme", isLight ? "light" : "dark");
  // 更新主题切换按钮的图标：浅色模式显示月亮，深色模式显示太阳
  themeToggle.textContent = isLight ? "🌙" : "🌞";
}

// 为主题切换按钮绑定点击事件
if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

/**
 * 页面初始化 - 当DOM内容加载完成后执行
 * 创建NavigationLoader实例并加载导航数据
 */
document.addEventListener("DOMContentLoaded", () => {
  // 创建NavigationLoader实例并调用load方法加载导航数据
  new NavigationLoader().load();
});