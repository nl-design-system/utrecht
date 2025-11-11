import { Drawer } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React, { type ForwardedRef, type HTMLAttributes, type PropsWithChildren } from 'react';
import { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import { NavigationIconLink } from './NavigationIconLink';
import { NavigationList } from './NavigationList';
import { NavToggleButton } from './NavigationToggleButton';
import { useClickOutside } from './useClickOutside';
import { useLockBody } from './useLockBody';
import { useScreenSize } from './useScreenSize';
import '@utrecht/navigation-css/dist/index.css';
export type NavigationListType = {
  textContent: string;
  href: string;
  isCurrent?: boolean;
  children?: NavigationListType[];
};

interface NavigationProps extends HTMLAttributes<HTMLElement> {
  list: NavigationListType[];
  targetId?: string;
  mobileBreakpoint: number;
  toggleButton?: {
    openText?: string;
    closeText?: string;
  };
}

export const sampleNavigationData: NavigationListType[] = [
  {
    textContent: 'Wonen en leven',
    href: '#',
    isCurrent: true,
  },
  {
    textContent: 'Zorg en onderwijs',
    href: '#',
  },
  {
    textContent: 'Werk en inkomen',
    href: '#',
  },
  {
    textContent: 'Ondernemen',
    href: '#',
  },
  {
    textContent: 'Bestuur en organisatie',
    href: '#',
  },
];

export const nestedNavigationData = [
  {
    textContent: 'Bouwen en Wonen',
    href: '/bouwen-en-wonen',
    children: [
      {
        textContent: 'Beschermen woningvoorraad',
        href: '/theme/beschermen-woningvoorraad',
        children: [
          {
            textContent: 'Landelijke Aanpak Adreskwaliteit',
            href: '/article/landelijke-aanpak-adreskwaliteit',
          },
          {
            textContent: 'Onrechtmatige bewoning van sociale huurwoningen',
            href: '/article/onrechtmatige-bewoning-van-sociale-huurwoningen',
          },
          {
            textContent: 'Programma beschermen woningvoorraad',
            href: '#',
          },
        ],
      },
      {
        textContent: 'Bouwregels Utrecht',
        href: '#',
      },
      {
        textContent: 'Brandveiligheid',
        href: '#',
        children: [
          {
            textContent: 'Brandveilige gevels',
            href: '#',
          },
          {
            textContent: 'Veiligheidsregio Utrecht (VRU)',
            href: '#',
          },
        ],
      },
      {
        textContent: 'Gebouwen met extra aandacht',
        href: '#',
        children: [
          {
            textContent: 'Parkeergarages',
            href: '#',
          },
          {
            textContent: 'Tunnels',
            href: '#',
          },
          {
            textContent: 'Werfkelders',
            href: '#',
          },
        ],
      },
      {
        textContent: 'Huurmisstanden',
        href: '#',
        children: [
          {
            textContent: 'Achterstallig onderhoud en Schimmelproblematiek',
            href: '#',
          },
          {
            textContent: 'Bescherming van huurders',
            href: '#',
          },
          {
            textContent: 'Huisjesmelkers',
            href: '#',
          },
          {
            textContent: 'Huurteam Utrecht',
            href: '#',
          },
        ],
      },
      {
        textContent: 'Meldingen Huisvesting, Omzetten & Splitsen',
        href: '#',
      },
      {
        textContent: 'Nieuwbouw en verbouw',
        href: '#',
        children: [
          {
            textContent: 'Bomen beschermen op de bouwplaats en evenementen',
            href: '#',
          },
          {
            textContent: "Bouwprojecten met kleine risico's",
            href: '#',
          },
          {
            textContent: 'Controle nieuwbouwprojecten',
            href: '#',
          },
        ],
      },
      {
        textContent: 'Omgevingsbegeleiding',
        href: '#',
      },
      {
        textContent: 'Omzetten en bouwkundig splitsen',
        href: '#',
      },
      {
        textContent: 'Projecten',
        href: '3',
      },
      {
        textContent: 'Slopen',
        href: '#',
      },
      {
        textContent: 'Meldingen en controles gebouwen',
        href: '#',
      },
    ],
  },
  {
    textContent: 'Energie en milieu',
    href: '#',
  },
  {
    textContent: 'Veiligheid en verkeer',
    href: '#',
  },
  {
    textContent: 'Leefbaarheid en vrije tijd',
    href: '#',
  },
  {
    textContent: 'Over VTH',
    href: '#',
  },
];

export const Navigation = forwardRef(
  (
    { list, mobileBreakpoint, toggleButton, targetId, ...restProps }: PropsWithChildren<NavigationProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const screenSize = useScreenSize();
    const [visible, setVisible] = useState<boolean>(false);
    const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
    const navigationListRef = useRef<HTMLUListElement | null>(null);
    const drawerRef = useRef<HTMLDialogElement | null>(null);
    const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

    const showModal = () => {
      if (drawerRef.current) {
        if (drawerRef.current.open) {
          drawerRef.current.close();
          setDrawerVisible(false);
        } else {
          setDrawerVisible(true);
          drawerRef.current.showModal();
        }
      }
    };
    useClickOutside(drawerRef, showModal);
    useLayoutEffect(() => {
      if (mobileBreakpoint && screenSize) {
        setVisible(screenSize < mobileBreakpoint);
      }
    }, [screenSize, mobileBreakpoint]);

    useLockBody({
      elementRef: navigationListRef,
      visible: drawerVisible && visible,
    });
    useLayoutEffect(() => {
      if (!visible && drawerRef?.current) {
        setDrawerVisible(false);
        drawerRef.current.close();
      }
    }, [visible, drawerRef.current]);

    return (
      <>
        <nav
          className={clsx(
            'utrecht-navigation',
            {
              'utrecht-navigation--mobile': visible,
            },
            restProps.className,
          )}
          ref={ref}
          {...restProps}
        >
          {!visible ? (
            <NavigationList id={targetId} list={list} mobile={visible} />
          ) : (
            <div
              style={{
                display: 'grid',
                rowGap: '8px',
                justifyItems: 'flex-end',
              }}
            >
              <NavToggleButton
                id={targetId}
                text={toggleButton?.openText}
                icon="hamburger"
                ref={hamburgerButtonRef}
                className={clsx({ 'utrecht-navigation__toggle-button--start-end': !drawerVisible })}
                aria-expanded={drawerVisible}
                onClick={showModal}
              />
              <NavigationIconLink href="#" icon={<utrecht-icon-geluid />} appearance="secondary">
                Lees voor
              </NavigationIconLink>
            </div>
          )}
        </nav>
        <>
          <Drawer align="inline-end" className={clsx('utrecht-navigation-drawer')} ref={drawerRef}>
            <nav
              className={clsx('utrecht-navigation', {
                'utrecht-navigation--mobile': visible,
              })}
              ref={ref}
              {...restProps}
            >
              <NavigationList languageSwitcher list={list} mobile={visible} ref={navigationListRef}>
                <NavToggleButton
                  text={toggleButton?.closeText}
                  id="nav-toggle-button-close"
                  icon="close"
                  aria-expanded={drawerVisible}
                  onClick={showModal}
                />
              </NavigationList>
            </nav>
          </Drawer>
        </>
      </>
    );
  },
);

Navigation.displayName = 'Navigation';
