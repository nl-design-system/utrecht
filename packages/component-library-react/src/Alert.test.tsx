import { render, screen } from '@testing-library/react';
import { Alert, AlertType, isAlertRole, isAlertType } from './Alert';
import '@testing-library/jest-dom';

describe('Alert', () => {
  it.each([
    ['info', 'status'],
    ['ok', 'status'],
    ['warning', 'alert'],
    ['error', 'alert'],
  ])('should set role="%s" when type is %s', (type, expectedRole) => {
    render(<Alert type={type as AlertType} />);
    const alert = screen.getByRole(expectedRole);
    expect(alert).toBeInTheDocument();
  });

  it('should allow custom roles', () => {
    render(<Alert role="superAlert" />);
    const alert = screen.getByRole('superAlert');
    expect(alert).toBeInTheDocument();
  });

  test.each([['info'], ['ok'], ['warning'], ['error']])(
    'should apply the correct class based on the type prop: %s',
    (type) => {
      const { container } = render(<Alert type={type} />);

      const alert = container.querySelector('.utrecht-alert');
      expect(alert).toHaveClass(`utrecht-alert--${type}`);
    },
  );

  it('should apply custom classes', () => {
    const { container } = render(<Alert className="custom-class" />);
    const alert = container.querySelector('.utrecht-alert');
    expect(alert).toHaveClass('custom-class');
  });

  it('should be properly hidden', () => {
    render(<Alert hidden />);
    const alert = screen.getByRole('status', { hidden: true });
    expect(alert).not.toBeVisible();
  });

  describe('guards', () => {
    describe('isAlertRole', () => {
      it.each([['status'], ['alert']])('should allow valid alert roles: %s', (role) => {
        expect(isAlertRole(role)).toBe(true);
      });
      it.each([['invalid'], ['123']])('should guard against invalid alert roles: %s', (role) => {
        expect(isAlertRole(role)).toBe(false);
      });
    });

    describe('isAlertType', () => {
      it.each([['info'], ['ok'], ['warning'], ['error']])('should allow valid alert types: %s', (type) => {
        expect(isAlertType(type)).toBe(true);
      });
      it.each([['invalid'], ['123']])('should guard against invalid alert types: %s', (type) => {
        expect(isAlertType(type)).toBe(false);
      });
    });
  });
});
