export const insertStyle = function (css: string) {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  }
};
