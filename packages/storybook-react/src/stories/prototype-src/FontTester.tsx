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
  { label: 'IBM Plex Sans 🤖', value: "'IBM Plex Sans', sans-serif" },
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

// 🔥 Google Fonts URLs (voor IBM Plex Sans, Roboto, Fira Sans, etc.)
const fontUrls: { [key: string]: string } = {
  "'IBM Plex Sans', sans-serif":
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap',
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

const FontTester: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
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
  const [buttonFontWeight, setButtonFontWeight] = useState(
    () => Number(localStorage.getItem('buttonFontWeight')) || 400,
  );
  const [letterSpacing, setLetterSpacing] = useState(() => Number(localStorage.getItem('letterSpacing')) || 0);
  const [copySuccess, setCopySuccess] = useState('');
  const [isOpen, setIsOpen] = useState(false); // 🔥 Toggle paneel

  useEffect(() => {
    localStorage.setItem('selectedFont', selectedFont);
    localStorage.setItem('fontSize', fontSize.toString());
    localStorage.setItem('lineHeight', lineHeight.toString());
    localStorage.setItem('headingFontWeight', headingFontWeight.toString());
    localStorage.setItem('strongFontWeight', strongFontWeight.toString());
    localStorage.setItem('paragraphFontWeight', paragraphFontWeight.toString());
    localStorage.setItem('buttonFontWeight', buttonFontWeight.toString());
    localStorage.setItem('letterSpacing', letterSpacing.toString());

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

    // Update de CSS-variabelen en regels voor de verschillende elementen
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
        letter-spacing: ${letterSpacing}px !important;

        /* Dynamische heading font-weight */
        --utrecht-heading-1-font-weight: ${headingFontWeight} !important;
        --utrecht-heading-2-font-weight: ${headingFontWeight} !important;

        /* Dynamische strong font-weight */
        --utrecht-emphasis-strong-font-weight: ${strongFontWeight} !important;
      
        /* Dynamische paragraph font-weight */
        --utrecht-paragraph-font-weight: ${paragraphFontWeight} !important;
      }

      /* ul, ol, li krijgen hetzelfde font-weight als de paragraaf */
      .utrecht-theme ul,
      .utrecht-theme ol,
      .utrecht-theme li {
        font-weight: ${paragraphFontWeight} !important;
      }

      /* Button krijgt een eigen font-weight */
      .utrecht-theme button,
      .utrecht-theme .utrecht-button-link {
        font-weight: ${buttonFontWeight} !important;
        font-size: ${fontSize}rem !important;
      }
    `;
  }, [
    selectedFont,
    fontSize,
    lineHeight,
    headingFontWeight,
    strongFontWeight,
    paragraphFontWeight,
    buttonFontWeight,
    letterSpacing,
  ]);

  // Genereert een overzicht met de huidige instellingen als tekst.
  const generateSettingsSummary = () => {
    const cleanFont = selectedFont.replace(/['"]/g, '');
    const fontSizePx = (fontSize * 16).toFixed(0);
    return `Font-family: ${cleanFont}
Font-size: ${fontSizePx}px (${fontSize.toFixed(2)}rem)
Line-height: ${lineHeight}
Letter Spacing: ${letterSpacing}px
Heading Font Weight: ${headingFontWeight}
Strong Font Weight: ${strongFontWeight}
Paragraph Font Weight: ${paragraphFontWeight}
Button Font Weight: ${buttonFontWeight}`;
  };

  // Kopieert de gegenereerde instellingen-opsomming naar het klembord.
  const handleCopySummary = () => {
    const summary = generateSettingsSummary();
    navigator.clipboard
      .writeText(summary)
      .then(() => {
        setCopySuccess('Instellingen gekopieerd!');
        setTimeout(() => setCopySuccess(''), 3000);
      })
      .catch((err) => {
        console.error('Fout bij kopiëren:', err);
      });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div>{children}</div>

      {/* 🔼 Inklapbare instellingen-box rechtsboven */}
      <div
        className="utrecht-font-tester-container"
        style={{
          insetInlineEnd: isOpen ? '0px' : '-250px',
        }}
      >
        {/* ⚙️ Toggle-knop */}
        <button className="utrecht-font-tester-toggle-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '▶' : '◀'}
        </button>

        {/* Extra link voor het kopiëren van de instellingenopsomming */}
        <div className="utrecht-font-tester-copysettings">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleCopySummary();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="icon icon-tabler icons-tabler-outline icon-tabler-copy"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
              <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
            </svg>
            Kopieer instellingen
          </a>
          {copySuccess && <div style={{ fontSize: '12px', color: 'lime' }}>{copySuccess}</div>}
        </div>

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

        <div>
          <label className="utrecht-font-tester-label">Button Font Weight: {buttonFontWeight}</label>
          <input
            type="range"
            min="300"
            max="900"
            step="100"
            value={buttonFontWeight}
            onChange={(e) => setButtonFontWeight(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>

        <div>
          <label className="utrecht-font-tester-label">Strong (Bold) Font Weight: {strongFontWeight}</label>
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
          <label className="utrecht-font-tester-label">LineHeight (regelafstand): {lineHeight}</label>
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

        {/* 🔹 Letter Spacing Slider */}
        <div>
          <label className="utrecht-font-tester-label">Letter Spacing: {letterSpacing}px</label>
          <input
            type="range"
            min="-1"
            max="2"
            step="0.1"
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default FontTester;
