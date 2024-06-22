import type { ButtonProps } from '@utrecht/component-library-react';
import {
  Alert,
  Button,
  ButtonGroup,
  FormFieldDescription,
  FormFieldErrorMessage,
  Paragraph,
} from '@utrecht/component-library-react';
import React from 'react';
import type { ReactNode } from 'react';

interface ButtonWithDescriptionProps extends ButtonProps {
  id: string;
  description: ReactNode;
  small?: boolean;
  errorMessage?: boolean;
  alertType?: string;
}

export const ButtonWithDescription = ({
  id,
  description,
  small,
  errorMessage,
  alertType,
  ...restProps
}: ButtonWithDescriptionProps) => {
  const descriptionId = description ? `${id}-description` : id;
  return (
    <div>
      {!!(description && !alertType) &&
        (errorMessage ? (
          <FormFieldErrorMessage id={descriptionId}>
            <Paragraph small={small}>{description}</Paragraph>
          </FormFieldErrorMessage>
        ) : (
          <FormFieldDescription id={descriptionId}>
            <Paragraph small={small}>{description}</Paragraph>
          </FormFieldDescription>
        ))}
      <ButtonGroup>
        <Button {...restProps} aria-describedby={descriptionId} />
      </ButtonGroup>
      {description && alertType ? (
        <Alert type={alertType}>
          <Paragraph id={descriptionId}>{description}</Paragraph>
        </Alert>
      ) : (
        false
      )}
    </div>
  );
};

ButtonWithDescription.displayName = 'ButtonWithDescription';
