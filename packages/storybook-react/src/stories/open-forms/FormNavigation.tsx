/* @license CC0-1.0 */

import React, { ButtonHTMLAttributes, ComponentType } from 'react';
import { ButtonGroup, Icon, Link, LinkButton } from '../../../../component-library-react/src/index.js';

// Same markup as the FormNavigation of the Open Forms SDK, for a step in a form with multiple steps.
// The SDK CSS sets the icons through `--fa` and the colour of the abort button.
const FAIcon = () => <i className="fa fas fa-icon fa-fw" aria-hidden="true" />;

export interface FormNavigationProps {
  // The PrimaryActionButton of the formio-renderer version used by the story.
  PrimaryActionButton: ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>;
}

export const FormNavigation = ({ PrimaryActionButton }: FormNavigationProps) => (
  <ButtonGroup className="openforms-form-navigation" direction="column">
    <PrimaryActionButton type="submit" name="next" className="openforms-form-navigation__next-button">
      Volgende
      <Icon>
        <FAIcon />
      </Icon>
    </PrimaryActionButton>
    <Link
      href="#"
      className="openforms-previous-link openforms-previous-link--end"
      onClick={(event: React.MouseEvent) => event.preventDefault()}
    >
      <Icon>
        <FAIcon />
      </Icon>
      Vorige
    </Link>
    <LinkButton name="save" className="openforms-form-navigation__save-button">
      <Icon>
        <FAIcon />
      </Icon>
      Opslaan en later doorgaan
    </LinkButton>
    <LinkButton name="abort" className="openforms-abort-button">
      <Icon>
        <FAIcon />
      </Icon>
      Annuleren
    </LinkButton>
  </ButtonGroup>
);
