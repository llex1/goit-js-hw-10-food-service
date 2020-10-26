import menuItem from "./templates/menuItem.hbs";
import dataMenuItem from "./data/menu.json";
import css from "./css/style.css";

const dom_menuList = document.querySelector('.menu.js-menu');
dom_menuList.insertAdjacentHTML('afterbegin', menuItem(dataMenuItem));

const dom_themeToggle = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('theme') === Theme.DARK) {
  dom_themeToggle.setAttribute('checked', true);
  document.body.className = Theme.DARK;
}


dom_themeToggle.addEventListener('input', el => {
  if (el.target.checked === true) {
    document.body.className = Theme.DARK;
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.className = Theme.LIGHT;
    localStorage.setItem('theme', Theme.LIGHT);
  }
});

