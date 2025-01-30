import React, { useEffect, useState } from 'react';

// 🔹 Beschikbare fonts
const fontOptions = [
  { label: 'Inter', value: "'Inter', sans-serif" },
  { label: 'Helvetica Neue', value: "'Helvetica Neue', Arial, sans-serif" },
  { label: 'Roboto', value: "'Roboto', sans-serif" },
  {
    label: 'System Font',
    value: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  { label: 'Comic Sans', value: "'Comic Sans MS', cursive, sans-serif" },
  { label: 'Courier New', value: "'Courier New', Courier, monospace" },
  { label: 'Times New Roman', value: "'Times New Roman', Times, serif" },
  { label: 'SF Mono (Mac)', value: "'SF Mono', Monaco, monospace" },
  { label: 'Ubuntu (Linux)', value: "'Ubuntu', sans-serif" },
];

// 🎨 🔥 Stijlen voor de sliders
const sliderStyle: React.CSSProperties = {
  width: '100%',
  appearance: 'none',
  height: '6px',
  background: '#ddd', // Lichtgrijze track
  borderRadius: '4px',
  outline: 'none',
  opacity: 0.9,
  transition: 'opacity 0.2s',
};

// 🎨 🔥 Stijlen voor de slider thumb (bolletje)
const sliderThumbStyle: React.CSSProperties = {
  appearance: 'none',
  width: '14px',
  height: '14px',
  background: '#fff', // Witte bol
  borderRadius: '50%',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  cursor: 'pointer',
  position: 'relative',
};

const FontTester: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 🔹 Laad instellingen of gebruik standaardwaarden
  const [selectedFont, setSelectedFont] = useState(() => localStorage.getItem('selectedFont') || fontOptions[0].value);
  const [fontSize, setFontSize] = useState(() => Number(localStorage.getItem('fontSize')) || 16);
  const [lineHeight, setLineHeight] = useState(() => Number(localStorage.getItem('lineHeight')) || 1.5);
  const [isOpen, setIsOpen] = useState(false); // 🔥 Toggle paneel

  useEffect(() => {
    // 🔹 Sla instellingen op
    localStorage.setItem('selectedFont', selectedFont);
    localStorage.setItem('fontSize', fontSize.toString());
    localStorage.setItem('lineHeight', lineHeight.toString());

    // 🔹 Zoek of er al een stijl-element is, anders aanmaken
    let styleElement = document.getElementById('fontOverrideStyle') as HTMLStyleElement;
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'fontOverrideStyle';
      document.head.appendChild(styleElement);
    }

    // 🔹 Zet de CSS-variabelen met `!important` om Storybook styles te overrulen
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
      {/* 🔥 Hoofdcontent */}
      <div>{children}</div>

      {/* 🔼 Inklapbare instellingen-box rechtsboven */}
      <div
        style={{
          position: 'fixed',
          top: '32px',
          right: isOpen ? '0px' : '-260px', // 🔥 Schuift in en uit
          background: '#282c34',
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
            top: '45%',
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

        {/* 🔹 Font Selector */}
        <label style={{ fontSize: '12px' }}>Font Family:</label>
        <select
          value={selectedFont}
          onChange={(e) => setSelectedFont(e.target.value)}
          style={{ padding: '3px', fontSize: '12px', width: '100%' }}
        >
          {fontOptions.map((font) => (
            <option key={font.value} value={font.value}>
              {font.label}
            </option>
          ))}
        </select>

        {/* 🔹 Font Size Slider */}
        <div style={{ marginTop: '5px' }}>
          <label style={{ fontSize: '12px' }}>Font Size: {fontSize}px</label>
          <input
            type="range"
            min="12"
            max="48"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            style={sliderStyle}
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
            style={sliderStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default FontTester;
