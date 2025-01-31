import React, { useEffect, useState } from 'react';

// 🔹 Beschikbare fonts
const fontOptions = [
  { label: 'Lucidia family', value: "'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Verdana, sans-serif" },
  { label: 'Inter', value: "'Inter', sans-serif" },
  { label: 'Helvetica Neue', value: "'Helvetica Neue', Arial, sans-serif" },
  { label: 'Roboto', value: "'Roboto', sans-serif" },
  { label: 'Fira Sans 🧙🏼‍♂️', value: "'Fira Sans', sans-serif" },
  { label: 'Mukta', value: "'Mukta', sans-serif" },
  {
    label: 'System Font',
    value: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  { label: 'Comic Sans', value: "'Comic Sans MS', cursive, sans-serif" },
  { label: 'Ubuntu (Linux)', value: "'Ubuntu', sans-serif" },
];

// 🔥 Google Fonts URLs (voor Inter, Roboto en Ubuntu)
const fontUrls: { [key: string]: string } = {
  "'Inter', sans-serif": 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap',
  "'Roboto', sans-serif": 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap',
  "'Fira Sans', sans-serif": 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;700&display=swap',
  "'Mukta', sans-serif": 'https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;700&display=swap',
};

const FontTester: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedFont, setSelectedFont] = useState(() => localStorage.getItem('selectedFont') || fontOptions[0].value);
  const [fontSize, setFontSize] = useState(() => Number(localStorage.getItem('fontSize')) || 16);
  const [lineHeight, setLineHeight] = useState(() => Number(localStorage.getItem('lineHeight')) || 1.5);
  const [isOpen, setIsOpen] = useState(false); // 🔥 Toggle paneel

  useEffect(() => {
    localStorage.setItem('selectedFont', selectedFont);
    localStorage.setItem('fontSize', fontSize.toString());
    localStorage.setItem('lineHeight', lineHeight.toString());

    // 🔹 Dynamisch een link-tag toevoegen om fonts in te laden
    const fontLinkId = 'dynamic-font';
    let fontLink = document.getElementById(fontLinkId) as HTMLLinkElement;

    if (!fontLink) {
      fontLink = document.createElement('link');
      fontLink.id = fontLinkId;
      fontLink.rel = 'stylesheet';
      document.head.appendChild(fontLink);
    }

    if (fontUrls[selectedFont]) {
      fontLink.href = fontUrls[selectedFont];
    } else {
      fontLink.href = ''; // Geen externe font nodig
    }

    // 🔹 Update de CSS-variabelen
    let styleElement = document.getElementById('fontOverrideStyle') as HTMLStyleElement;
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'fontOverrideStyle';
      document.head.appendChild(styleElement);
    }

    styleElement.innerHTML = `
      .utrecht-theme {
        --utrecht-document-font-family: ${selectedFont} !important;
        --utrecht-typography-sans-serif-font-family: ${selectedFont} !important;
        --utrecht-document-font-size: ${fontSize}px !important;
        --utrecht-document-line-height: ${lineHeight} !important;
        --utrecht-paragraph-line-height: ${lineHeight} !important;
      }
    `;
  }, [selectedFont, fontSize, lineHeight]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div>{children}</div>

      {/* 🔼 Inklapbare instellingen-box rechtsboven */}
      <div
        style={{
          position: 'fixed',
          top: '32px',
          right: isOpen ? '0px' : '-260px', // 🔥 Schuift in en uit
          background: '#282c34',
          opacity: 0.85,
          color: '#eee',
          padding: '16px',
          borderRadius: '3px',
          transition: 'right 0.3s ease-in-out',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          textAlign: 'left',
          minWidth: '220px',
          zIndex: 1000,
        }}
      >
        {/* ⚙️ Toggle-knop */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'absolute',
            top: '26px',
            left: '-35px',
            transform: 'translateY(-50%)',
            background: '#282c34',
            color: '#eee',
            border: 'none',
            padding: '0px',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '18px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          }}
        >
          {isOpen ? '▶' : '◀'}
        </button>

        {/* 🔹 Font Selector als Radio Buttons */}
        <label style={{ fontSize: '12px', display: 'block', marginBottom: '5px' }}>Font Family:</label>
        <div style={{ maxHeight: '500px', overflowY: 'auto', padding: '5px', borderRadius: '3px' }}>
          {fontOptions.map((font) => (
            <label key={font.value} style={{ display: 'block', fontSize: '12px', cursor: 'pointer', padding: '3px 0' }}>
              <input
                type="radio"
                name="fontSelector"
                value={font.value}
                checked={selectedFont === font.value}
                onChange={(e) => setSelectedFont(e.target.value)}
                style={{ marginRight: '8px' }}
              />
              {font.label}
            </label>
          ))}
        </div>

        {/* 🔹 Font Size Slider */}
        <div style={{ marginTop: '5px' }}>
          <label style={{ fontSize: '12px' }}>Font Size: {fontSize}px</label>
          <input
            type="range"
            min="12"
            max="48"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>

        {/* 🔹 Line Height Slider */}
        <div style={{ marginTop: '5px' }}>
          <label style={{ fontSize: '12px' }}>LineHeight: {lineHeight}</label>
          <input
            type="range"
            min="1.0"
            max="2.5"
            step="0.1"
            value={lineHeight}
            onChange={(e) => setLineHeight(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default FontTester;
