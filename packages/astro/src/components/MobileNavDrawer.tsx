import { Drawer, NavList, NavListLink, SubtleButton } from '@utrecht/component-library-react';
import { base } from 'astro:config/client';
import React, { useEffect, useRef, useState } from 'react';

const MobileNavDrawer = () => {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<any>(null);

  const toggle = () => {
    if (drawerRef.current) {
      if (drawerRef.current.open) {
        drawerRef.current.close();
      } else {
        drawerRef.current.showModal();
      }
    } else {
      setOpen((s) => !s);
    }
  };

  useEffect(() => {
    import('@utrecht/web-component-library-stencil/loader').then(({ defineCustomElements }) => {
      defineCustomElements();
    });

    const el = drawerRef.current;
    if (!el) return () => {};
    const update = () => setOpen(Boolean(el.open));
    el.addEventListener('close', update);
    el.addEventListener('cancel', update);
    return () => {
      el.removeEventListener('close', update);
      el.removeEventListener('cancel', update);
    };
  }, []);

  return (
    <>
      <SubtleButton
        className="utrecht-navigation-toggle"
        aria-controls="mobile-navigation-drawer"
        aria-expanded={open}
        onClick={toggle}
      >
        <utrecht-icon-hamburger-menu /> Menu
      </SubtleButton>

      <Drawer align="inline-end" ref={drawerRef} id="mobile-navigation-drawer">
        <nav aria-label="Hoofdmenu">
          <NavList>
            <NavListLink href={`${base}/design-system`}>Utrecht Design System</NavListLink>
            <NavListLink href={`${base}/designers`}>Voor designers</NavListLink>
            <NavListLink href={`${base}/developers`}>Voor developers</NavListLink>
            <NavListLink href={`${base}/richtlijnen`}>Richtlijnen</NavListLink>
            <NavListLink href={`${base}/componenten`}>Componenten</NavListLink>
            <NavListLink href={`${base}/vragen`}>Vragen</NavListLink>
          </NavList>
        </nav>
      </Drawer>
    </>
  );
};

export default MobileNavDrawer;
