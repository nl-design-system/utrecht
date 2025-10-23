// NotoSwitcher.js
(function () {
  // 1️⃣ Google Fonts inladen
  const notoLink = document.createElement('link');
  notoLink.rel = 'stylesheet';
  notoLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300;400;500;600;700;800&display=swap';
  document.head.appendChild(notoLink);

  // 2️⃣ Override-stijl injecteren
  const overrideStyle = document.createElement('style');
  overrideStyle.id = 'noto-switcher-style';
  overrideStyle.textContent = `
      /* Zorg dat alles Noto Sans Variable pakt */
      html, body, * {
        font-family: 'Noto Sans Variable', sans-serif !important;
      }
      /* Eventueel kun je hier nog specifieke weights of variabelen toevoegen */
    `;
  document.head.appendChild(overrideStyle);

  // 3️⃣ Optioneel: console-melding voor debug
  console.log('[Noto-Switcher] Alle fonts zijn omgezet naar Noto Sans Variable.');
})();
