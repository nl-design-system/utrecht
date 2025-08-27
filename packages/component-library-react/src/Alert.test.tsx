import { render, screen } from '@testing-library/react';
import { Alert } from './Alert';
import '@testing-library/jest-dom';

describe('Alert', () => {
  it('should render the alert with role status', () => {
    render(<Alert />);
    const alert = screen.getByRole('status');
    expect(alert).toBeInTheDocument();
  });

  it('should render the alert with role alert', () => {
    render(<Alert type="error" />);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });

  it('should allow custom roles', () => {
    render(<Alert role="superAlert" />);
    const alert = screen.getByRole('superAlert');
    expect(alert).toBeInTheDocument();
  });

  it('should default type to info', () => {
    const { container } = render(<Alert />);
    const alert = container.querySelector('.utrecht-alert');
    expect(alert).toHaveClass('utrecht-alert--info');
  });

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
});
