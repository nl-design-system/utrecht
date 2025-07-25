import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { UtrechtActionGroup } from './component';
import { clearElements } from '../utils';

const actionGroupWithChildren = `<utrecht-action-group>
<button utrecht-button>Save and continue</button>
<button utrecht-button>Back</button>
</utrecht-action-group>`;

afterEach(() => {
  clearElements();
});

describe('Action Group', () => {
  it('renders a group role element', async () => {
    const { fixture } = await render(actionGroupWithChildren, { declarations: [UtrechtActionGroup] });
    fixture.detectChanges();

    const actionGroup = screen.getByRole('group', {
      hidden: true,
    });

    expect(actionGroup).toBeInTheDocument();
    expect(actionGroup).toBeVisible();
  });

  it('renders an HTML p element', async () => {
    const { container } = await render(actionGroupWithChildren, {
      declarations: [UtrechtActionGroup],
    });

    const paragaph = container.querySelector('p:only-child');

    expect(paragaph).toBeInTheDocument();
  });

  it('renders a design system BEM class name', async () => {
    const { fixture } = await render(actionGroupWithChildren, { declarations: [UtrechtActionGroup] });
    const el = fixture.debugElement.query(By.css('.utrecht-action-group'));

    expect(el.nativeElement.classList.contains('utrecht-action-group')).toBe(true);
  });

  it('renders Action Group that contain buttons as children', async () => {
    const { fixture } = await render(actionGroupWithChildren, { declarations: [UtrechtActionGroup] });
    const debugElement = fixture.debugElement.query(By.css('.utrecht-action-group'))!;
    fixture.detectChanges();

    expect(debugElement.nativeElement).toContainHTML('button');
  });

  it('can have a custom class name', async () => {
    const fixture = TestBed.createComponent(UtrechtActionGroup);
    const debugElement = fixture.debugElement.query(By.css('.utrecht-action-group'))!;
    debugElement.nativeElement.classList.add('custom-class');
    fixture.detectChanges();

    expect(debugElement.nativeElement.classList.contains('custom-class')).toBeTruthy();
  });
});
