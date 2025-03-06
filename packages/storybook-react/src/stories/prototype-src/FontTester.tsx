import { Heading2 } from '@utrecht/component-library-react';
import React, { useEffect, useState } from 'react';

// 🔹 Beschikbare fonts
const fontOptions = [
  {
    label: 'Lucida family (Hebben we nu)',
    value: "'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Verdana, sans-serif",
  },
  { label: 'Fira Sans 🧙🏼‍♂️', value: "'Fira Sans', sans-serif" },
  { label: 'Source Sans 3', value: "'Source Sans 3', sans-serif" },
  { label: 'Noto Sans', value: "'Noto Sans', sans-serif" },
  { label: 'Work Sans', value: "'Work Sans', sans-serif" },
  { label: 'Open Sans', value: "'Open Sans', sans-serif" },
  { label: 'Public Sans', value: "'Public Sans', sans-serif" },
  { label: 'Helvetica family (Voorbeeld)', value: "'Helvetica Neue', sans-serif" },
  {
    label: 'System Font',
    value: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  { label: 'Comic Sans 👀', value: "'Comic Sans MS', cursive, sans-serif" },
];

// 🔥 Google Fonts URLs (voor Inter, Roboto en Ubuntu)
const fontUrls: { [key: string]: string } = {
  "'Inter', sans-serif":
    'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  "'Roboto', sans-serif": 'https://fonts.googleapis.com/css2?family=Roboto:wght@300..700&display=swap',
  "'Fira Sans', sans-serif":
    'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet',
  "'Mukta', sans-serif": 'https://fonts.googleapis.com/css2?family=Mukta:wght@300..700&display=swap',
  "'Source Sans 3', sans-serif":
    'https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap',
  "'Work Sans', sans-serif":
    'https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap',
  "'Open Sans', sans-serif":
    'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
  "'Public Sans', sans-serif":
    'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap',
  "'Noto Sans', sans-serif":
    'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap',
};

const FontTester: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedFont, setSelectedFont] = useState(() => localStorage.getItem('selectedFont') || fontOptions[0].value);
  const [fontSize, setFontSize] = useState(() => Number(localStorage.getItem('fontSize')) || 1);
  const [lineHeight, setLineHeight] = useState(() => Number(localStorage.getItem('lineHeight')) || 1.5);
  const [headingFontWeight, setHeadingFontWeight] = useState(
    () => Number(localStorage.getItem('headingFontWeight')) || 700,
  );
  const [strongFontWeight, setStrongFontWeight] = useState(
    () => Number(localStorage.getItem('strongFontWeight')) || 600,
  );
  const [paragraphFontWeight, setParagraphFontWeight] = useState(
    () => Number(localStorage.getItem('paragraphFontWeight')) || 400,
  );

  const [isOpen, setIsOpen] = useState(false); // 🔥 Toggle paneel

  useEffect(() => {
    localStorage.setItem('selectedFont', selectedFont);
    localStorage.setItem('fontSize', fontSize.toString());
    localStorage.setItem('lineHeight', lineHeight.toString());
    localStorage.setItem('headingFontWeight', headingFontWeight.toString());
    localStorage.setItem('strongFontWeight', strongFontWeight.toString());
    localStorage.setItem('paragraphFontWeight', paragraphFontWeight.toString());

    // Dynamisch een link-tag toevoegen om fonts in te laden
    const fontLinkId = 'dynamic-font';
    let fontLink = document.getElementById(fontLinkId) as HTMLLinkElement;
    if (!fontLink) {
      fontLink = document.createElement('link');
      fontLink.id = fontLinkId;
      fontLink.rel = 'stylesheet';
      document.head.appendChild(fontLink);
    }
    fontLink.href = fontUrls[selectedFont] || '';

    // Update de CSS-variabelen met de font-size in REM (direct)
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
        --utrecht-paragraph-font-size: ${fontSize}rem !important;
        --utrecht-document-line-height: ${lineHeight} !important;
        --utrecht-paragraph-line-height: ${lineHeight} !important;

        /* ✅ Dynamische heading font-weight */
        --utrecht-heading-1-font-weight: ${headingFontWeight} !important;
        --utrecht-heading-2-font-weight: ${headingFontWeight} !important;

        /* ✅ Dynamische strong font-weight */
        --utrecht-emphasis-strong-font-weight: ${strongFontWeight} !important;
      
        /* ✅ Dynamische paragraph font-weight */
        --utrecht-paragraph-font-weight: ${paragraphFontWeight} !important;
        }
    `;
  }, [selectedFont, fontSize, lineHeight, headingFontWeight, strongFontWeight, paragraphFontWeight]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div>{children}</div>

      {/* 🔼 Inklapbare instellingen-box rechtsboven */}
      <div
        className="utrecht-font-tester-container"
        style={{
          insetInlineEnd: isOpen ? '0px' : '-250px', // 🔥 Schuift in en uit
        }}
      >
        {/* ⚙️ Toggle-knop */}
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '▶' : '◀'}</button>

        {/* 🔹 Font Selector als Radio Buttons */}
        <Heading2 className="utrecht-font-tester-h2">Kies een lettertype</Heading2>
        <div style={{ overflowY: 'auto' }}>
          {fontOptions.map((font) => (
            <label key={font.value} className="utrecht-font-tester-label">
              <input
                type="radio"
                name="fontSelector"
                value={font.value}
                checked={selectedFont === font.value}
                onChange={(e) => setSelectedFont(e.target.value)}
              />
              {font.label}
            </label>
          ))}
        </div>

        {/* 🔹 Font Weight Sliders */}
        <Heading2 className="utrecht-font-tester-h2">Shape het lettertype</Heading2>

        <div>
          <label className="utrecht-font-tester-label">Heading Font Weight: {headingFontWeight}</label>
          <input
            type="range"
            min="300"
            max="900"
            step="100"
            value={headingFontWeight}
            onChange={(e) => setHeadingFontWeight(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>

        <div>
          <label className="utrecht-font-tester-label">Strong Font Weight: {strongFontWeight}</label>
          <input
            type="range"
            min="300"
            max="900"
            step="100"
            value={strongFontWeight}
            onChange={(e) => setStrongFontWeight(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>

        <div>
          <label className="utrecht-font-tester-label">Paragraph Font Weight: {paragraphFontWeight}</label>
          <input
            type="range"
            min="300"
            max="900"
            step="100"
            value={paragraphFontWeight}
            onChange={(e) => setParagraphFontWeight(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>

        {/* 🔹 Font Size Slider */}
        <div>
          <label className="utrecht-font-tester-label">
            Font Size: {fontSize.toFixed(2)}rem ({(fontSize * 16).toFixed(0)}px)
          </label>
          <input
            type="range"
            min="0.8"
            max="3"
            step="0.1"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>

        {/* 🔹 Line Height Slider */}
        <div>
          <label className="utrecht-font-tester-label">LineHeight: {lineHeight}</label>
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
