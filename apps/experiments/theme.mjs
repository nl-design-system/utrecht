import './render-template.mjs';

const setTheme = (theme, target) => {
  const root = target.closest('.theme-container');
  Array.from(root.classList)
    .filter((className) => /-theme$/.test(className))
    .forEach((className) => {
      root.classList.remove(className);
    });

  root.classList.add(theme);
};

const theme = location.search.replace(/^\?theme=(.+)/, '$1');
if (theme) {
  setTheme(theme);
}

window.setTheme = setTheme;

document.body.addEventListener('keypress', (evt) => {
  if (evt.altKey && /^Digit\d$/.test(evt.code)) {
    const number = parseInt(evt.code.replace(/[^\d]+/g, ''), 10);
    const buttons = document.querySelectorAll('button[rel="theme"]');
    const targetButton = buttons[number - 1];
    if (targetButton) {
      targetButton.click();
    }
  }
});
