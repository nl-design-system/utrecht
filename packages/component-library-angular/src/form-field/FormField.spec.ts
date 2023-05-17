import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { UtrechtFormField } from './component';
import { clearElements } from '../utils';

afterEach(() => {
  clearElements();
});

describe('Form Field', () => {
  it('renders an HTML div element', async () => {
    const fixture = TestBed.createComponent(UtrechtFormField);
    fixture.detectChanges();
    expect(fixture.nativeElement).toBeInTheDocument();
  });

  it('renders a design system BEM class name', async () => {
    const { container } = await render('<utrecht-form-field></utrecht-form-field>', {
      declarations: [UtrechtFormField],
    });

    const field = container.querySelector('div');

    expect(field).toHaveClass('utrecht-form-field');
  });

  it('displays as CSS block element (or equivalent)', async () => {
    const { container } = await render('<utrecht-form-field></utrecht-form-field>', {
      declarations: [UtrechtFormField],
    });

    const field = container.querySelector('div');

    expect(field).toBeVisible();
    expect(field).not.toHaveStyle({ display: 'inline' });
    expect(field).not.toHaveStyle({ display: 'inline-block' });
  });

  it('renders rich text content', async () => {
    await render('<utrecht-form-field><input utrecht-textbox/></utrecht-form-field>', {
      declarations: [UtrechtFormField],
    });

    const textbox = screen.getByRole('textbox');

    expect(textbox).toBeInTheDocument();
  });

  it('can be hidden', async () => {
    const { container } = await render('<utrecht-form-field hidden="true"></utrecht-form-field>', {
      declarations: [UtrechtFormField],
    });

    const field = container.querySelector('div');

    expect(field).not.toBeVisible();
  });

  it('can have a custom class name', async () => {
    const { fixture } = await render(`<utrecht-form-field class="custom-class"></utrecht-form-field>`, {
      declarations: [UtrechtFormField],
    });
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('.utrecht-form-field'));

    expect(debugElement.nativeElement).toHaveClass('custom-class');
  });

  it('can have a custom class name', async () => {
    const { fixture } = await render(`<utrecht-form-field class="custom-class"></utrecht-form-field>`, {
      declarations: [UtrechtFormField],
    });
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('.utrecht-form-field'));

    expect(debugElement.nativeElement).toHaveClass('custom-class');
  });

  describe('`type` variants ', () => {
    it('can not have type="checkbox" property by default', async () => {
      const { fixture } = await render(UtrechtFormField);
      fixture.detectChanges();

      const debugElement = fixture.debugElement.query(By.css('.utrecht-form-field'));
      expect(debugElement.nativeElement).not.toHaveClass('utrecht-form-field--checkbox');
    });

    it('can not have type="radio" property by default', async () => {
      const { fixture } = await render(UtrechtFormField);
      fixture.detectChanges();

      const debugElement = fixture.debugElement.query(By.css('.utrecht-form-field'));
      expect(debugElement.nativeElement).not.toHaveClass('utrecht-form-field--radio');
    });
    it('can not have type="text" property by default', async () => {
      const { fixture } = await render(UtrechtFormField);
      fixture.detectChanges();

      const debugElement = fixture.debugElement.query(By.css('.utrecht-form-field'));
      expect(debugElement.nativeElement).not.toHaveClass('utrecht-form-field--text');
    });

    it('renders a design system BEM modifier class utrecht-form-field--checkbox based on type="checkbox"', async () => {
      const { fixture } = await render('<utrecht-form-field type="checkbox">Checkbox Type</utrecht-form-field>', {
        declarations: [UtrechtFormField],
      });
      fixture.detectChanges();

      const debugElement = fixture.debugElement.query(By.css('.utrecht-form-field'));
      expect(debugElement.nativeElement).toHaveClass('utrecht-form-field--checkbox');
    });
    it('renders a design system BEM modifier class utrecht-form-field--radio based on type="radio"', async () => {
      const { fixture } = await render('<utrecht-form-field type="radio">Radio Type</utrecht-form-field>', {
        declarations: [UtrechtFormField],
      });
      fixture.detectChanges();

      const debugElement = fixture.debugElement.query(By.css('.utrecht-form-field'));
      expect(debugElement.nativeElement).toHaveClass('utrecht-form-field--radio');
    });

    it('renders a design system BEM modifier class utrecht-form-field--text based on type="text"', async () => {
      const { fixture } = await render('<utrecht-form-field type="text">Text Type</utrecht-form-field>', {
        declarations: [UtrechtFormField],
      });
      fixture.detectChanges();

      const debugElement = fixture.debugElement.query(By.css('.utrecht-form-field'));
      expect(debugElement.nativeElement).toHaveClass('utrecht-form-field--text');
    });
  });

  describe('`invalid` variants ', () => {
    it('can not have invalid property by default', async () => {
      const { fixture } = await render(UtrechtFormField);
      fixture.detectChanges();

      const debugElement = fixture.debugElement.query(By.css('.utrecht-form-field'));
      expect(debugElement.nativeElement).not.toHaveClass('utrecht-form-field--invalid');
    });
    it('renders a design system BEM modifier class utrecht-form-field--invalid based on type="invalid"', async () => {
      const { fixture } = await render('<utrecht-form-field invalid="true">Invalid</utrecht-form-field>', {
        declarations: [UtrechtFormField],
      });
      fixture.detectChanges();

      const debugElement = fixture.debugElement.query(By.css('.utrecht-form-field'));
      expect(debugElement.nativeElement).toHaveClass('utrecht-form-field--invalid');
    });
  });
});
