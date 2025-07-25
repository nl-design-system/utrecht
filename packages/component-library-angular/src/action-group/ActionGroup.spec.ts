import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { UtrechtButtonGroup } from './component';
import { clearElements } from '../utils';

const buttonGroupWithChildren = `<utrecht-button-group>
<button utrecht-button>Save and continue</button>
<button utrecht-button>Back</button>
</utrecht-button-group>`;

afterEach(() => {
  clearElements();
});

describe('Button Group', () => {
  it('renders a group role element', async () => {
    const { fixture } = await render(buttonGroupWithChildren, { declarations: [UtrechtButtonGroup] });
    fixture.detectChanges();

    const buttonGroup = screen.getByRole('group', {
      hidden: true,
    });

    expect(buttonGroup).toBeInTheDocument();
    expect(buttonGroup).toBeVisible();
  });

  it('renders an HTML p element', async () => {
    const { container } = await render(buttonGroupWithChildren, {
      declarations: [UtrechtButtonGroup],
    });

    const paragaph = container.querySelector('p:only-child');

    expect(paragaph).toBeInTheDocument();
  });

  it('renders a design system BEM class name', async () => {
    const { fixture } = await render(buttonGroupWithChildren, { declarations: [UtrechtButtonGroup] });
    const el = fixture.debugElement.query(By.css('.utrecht-button-group'));

    expect(el.nativeElement.classList.contains('utrecht-button-group')).toBe(true);
  });

  it('renders Button Group that contain buttons as children', async () => {
    const { fixture } = await render(buttonGroupWithChildren, { declarations: [UtrechtButtonGroup] });
    const debugElement = fixture.debugElement.query(By.css('.utrecht-button-group'))!;
    fixture.detectChanges();

    expect(debugElement.nativeElement).toContainHTML('button');
  });

  it('can have a custom class name', async () => {
    const fixture = TestBed.createComponent(UtrechtButtonGroup);
    const debugElement = fixture.debugElement.query(By.css('.utrecht-button-group'))!;
    debugElement.nativeElement.classList.add('custom-class');
    fixture.detectChanges();

    expect(debugElement.nativeElement.classList.contains('custom-class')).toBeTruthy();
  });
});
