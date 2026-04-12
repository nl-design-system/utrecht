import '@utrecht/root-css/dist/index.css';
import '@utrecht/page-layout-css/dist/index.css';
import '@utrecht/page-body-css/dist/index.css';
import '@utrecht/page-header-css/dist/index.css';
import '@utrecht/page-footer-css/dist/index.css';
import '@utrecht/nav-bar-css/dist/index.css';
import '@utrecht/nav-list-css/dist/index.css';
import '@utrecht/design-tokens/dist/theme.css';

export const setupScenario1 = () => {
  document.documentElement.classList.add('utrecht-root');
};

export const setupBody = () => {
  document.body.classList.add('utrecht-root');
};

export const setupDialog = () => {
  document.body.insertAdjacentHTML('beforeend', `<dialog open class="utrecht-root"></div>`);
};
