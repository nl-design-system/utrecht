/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Gemeente Utrecht
 * Copyright (c) 2024 Frameless B.V.
 */

import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import { Drawer } from './Drawer';
import { Figure } from './Figure';

interface FigureDetailsProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  openButtonText: string;
  openButtonAppearance?: string;
  openButtonClassName?: string;
  closeButtonText: string;
  closeButtonAppearance?: string;
  closeButtonClassName?: string;
  drawerClassName?: string;
  children?: any;
}

export const FigureDetails = forwardRef(
  (
    {
      openButtonText,
      openButtonAppearance,
      openButtonClassName,
      closeButtonText,
      closeButtonAppearance,
      closeButtonClassName,
      drawerClassName,
      children,
      ...restProps
    }: PropsWithChildren<FigureDetailsProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [open, setOpen] = useState(false);
    const drawer = useRef<HTMLDialogElement>(null);
    const showModal = () => {
      if (drawer.current) {
        setOpen(true);
        drawer.current.showModal();
      }
    };
    const closeModal = () => {
      setOpen(false);
      drawer.current?.close();
    };

    useEffect(() => {
      // close the dialog when someone clicked the backdrop
      const handleBackdropClick = (event: MouseEvent) => {
        if (event.target === drawer.current) {
          closeModal();
        }
      };
      document.addEventListener('click', handleBackdropClick);

      return () => {
        document.removeEventListener('click', handleBackdropClick);
      };
    });

    return (
      <Figure ref={ref} {...restProps}>
        <Button className={openButtonClassName} appearance={openButtonAppearance} onClick={showModal}>
          {openButtonText}
        </Button>
        <Drawer className={drawerClassName} ref={drawer} open={open}>
          <Button className={closeButtonClassName} appearance={closeButtonAppearance} onClick={closeModal}>
            {closeButtonText}
          </Button>
          {children}
        </Drawer>
      </Figure>
    );
  },
);
FigureDetails.displayName = 'FigureDetails';
