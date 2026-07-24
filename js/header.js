// 获取导航栏元素
const navbar = document.getElementById('navbar');

// 监听窗口的滚动事件
window.addEventListener('scroll', () => {
  // 如果页面向下滚动超过 50 像素
  if (window.scrollY > 50) {
    // 添加 'scrolled' 类名，触发 CSS 中的阴影和背景变深效果
    navbar.classList.add('scrolled');
  } else {
    // 回到顶部时移除该类名
    navbar.classList.remove('scrolled');
  }
});