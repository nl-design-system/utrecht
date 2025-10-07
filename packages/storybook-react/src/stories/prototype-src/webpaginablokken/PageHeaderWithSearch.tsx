import { Button, Logo, LogoImage, PageHeader, Textbox } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

const PageHeaderWithSearch = () => {
  return (
    <PageHeader className="utrecht-page-header--with-search">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          gap: '2rem',
          padding: '1rem 0',
          flexWrap: 'wrap',
        }}
      >
        <Logo>
          <LogoImage />
        </Logo>

        <div
          style={{
            display: 'flex',
            flex: '0 1 400px',
            minWidth: '280px',
            border: '1px solid #000',
            backgroundColor: '#fff',
          }}
        >
          <label
            htmlFor="header-search"
            style={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              padding: 0,
              margin: '-1px',
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              borderWidth: 0,
            }}
          >
            Zoeken
          </label>
          <Textbox
            id="header-search"
            type="search"
            placeholder=""
            style={{
              flex: 1,
              border: 'none',
              borderRadius: 0,
              padding: '0.75rem 1rem',
              outline: 'none',
            }}
          />
          <Button
            appearance="primary-action-button"
            type="button"
            style={{
              borderRadius: 0,
              border: 'none',
              padding: '0.75rem 1.5rem',
              minHeight: 'auto',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            Zoeken
          </Button>
        </div>
      </div>
    </PageHeader>
  );
};

export default PageHeaderWithSearch;
