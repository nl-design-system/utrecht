import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';
import AccordionProvider from './AccordionProvider.vue';

const providerOptions = {
  props: {
    sections: [
      {
        label: 'section label',
        body: 'section body',
        expanded: false,
      },
    ],
  },
};

const providerOptionsWithTwoSections = {
  props: {
    sections: [
      {
        label: 'first section label',
        body: 'first section body',
        expanded: true,
      },
      {
        label: 'second section label',
        body: 'second section body',
        expanded: false,
      },
    ],
  },
};

describe('AccordionProvider', () => {
  it('renders an accordion with a section in it', () => {
    const { container } = render(AccordionProvider, providerOptions);

    const accordion = container.querySelector('div.utrecht-accordion');
    const accordionSection = container.querySelector('.utrecht-accordion__section');

    expect(accordion).toBeInTheDocument();
    expect(accordion).toBeVisible();
    expect(accordionSection).toBeInTheDocument();
    expect(accordionSection).toBeVisible();
  });

  it('should set the sections expanded property to true if it was false initially', async () => {
    const wrapper = mount(AccordionProvider, {
      props: {
        sections: {
          ...providerOptions.props.sections,
        },
      },
    } as any);
    const wrapperInstance = wrapper.vm as any;

    expect(wrapperInstance.sectionsRefs[0].value.expanded).toBe(false);
    wrapperInstance.handleActivate(wrapperInstance.sectionsRefs[0].value.id);
    expect(wrapperInstance.sectionsRefs[0].value.expanded).toBe(true);
  });

  it('should set the sections expanded property to false if it was true initially', async () => {
    const wrapper = mount(AccordionProvider, {
      props: {
        sections: [
          {
            label: 'section label',
            body: 'section body',
            expanded: true,
          },
        ],
      },
    } as any);
    const wrapperInstance = wrapper.vm as any;

    expect(wrapperInstance.sectionsRefs[0].value.expanded).toBe(true);
    wrapperInstance.handleActivate(wrapperInstance.sectionsRefs[0].value.id);
    expect(wrapperInstance.sectionsRefs[0].value.expanded).toBe(false);
  });

  it('should focus the last section if the "End key is pressed"', () => {
    const wrapper = mount(AccordionProvider, {
      props: {
        sections: [
          {
            label: 'first section label',
            body: 'first section body',
            expanded: true,
          },
          {
            label: 'second section label',
            body: 'second section body',
            expanded: false,
          },
        ],
      },
    } as any);
    const wrapperInstance = wrapper.vm as any;
    const keyboardEventEnd: KeyboardEvent = new KeyboardEvent('End', {
      code: 'End',
    });

    // setting the active section to first section
    const keyboardEvent: KeyboardEvent = new KeyboardEvent('Home', {
      code: 'Home',
    });
    wrapperInstance.handleKeyDown(keyboardEvent);
    expect(wrapperInstance.activeSection).toEqual(wrapperInstance.sectionsRefs[0].value);

    // focusing the last section
    wrapperInstance.handleKeyDown(keyboardEventEnd);
    expect(wrapperInstance.activeSection).toEqual(wrapperInstance.sectionsRefs[1].value);
  });

  it('should focus the first section if the "Home key is pressed"', () => {
    const wrapper = mount(AccordionProvider, {
      ...providerOptionsWithTwoSections,
    } as any);
    const wrapperInstance = wrapper.vm as any;
    const keyboardEvent: KeyboardEvent = new KeyboardEvent('Home', {
      code: 'Home',
    });
    const preventDefaultSpy = jest.spyOn(keyboardEvent, 'preventDefault');

    expect(wrapperInstance.activeSection).toBeNull();
    wrapperInstance.handleKeyDown(keyboardEvent);

    expect(wrapperInstance.activeSection).toEqual(wrapperInstance.sectionsRefs[0].value);
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should focus the next section if the "ArrowDown key is pressed"', () => {
    const wrapper = mount(AccordionProvider, {
      ...providerOptionsWithTwoSections,
    } as any);
    const wrapperInstance = wrapper.vm as any;
    wrapperInstance.activeSection = wrapperInstance.sectionsRefs[0].value;

    const keyboardEvent: KeyboardEvent = new KeyboardEvent('ArrowDown', {
      code: 'ArrowDown',
    });
    const preventDefaultSpy = jest.spyOn(keyboardEvent, 'preventDefault');

    expect(wrapperInstance.activeSection).toEqual(wrapperInstance.sectionsRefs[0].value);
    wrapperInstance.handleKeyDown(keyboardEvent);
    expect(wrapperInstance.activeSection).toEqual(wrapperInstance.sectionsRefs[1].value);
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should focus the previous section if the "ArrowUp key is pressed"', () => {
    const wrapper = mount(AccordionProvider, {
      ...providerOptionsWithTwoSections,
    } as any);
    const wrapperInstance = wrapper.vm as any;
    wrapperInstance.activeSection = wrapperInstance.sectionsRefs[1].value;

    const keyboardEvent: KeyboardEvent = new KeyboardEvent('ArrowUp', {
      code: 'ArrowUp',
    });
    const preventDefaultSpy = jest.spyOn(keyboardEvent, 'preventDefault');

    expect(wrapperInstance.activeSection).toEqual(wrapperInstance.sectionsRefs[1].value);
    wrapperInstance.handleKeyDown(keyboardEvent);
    expect(wrapperInstance.activeSection).toEqual(wrapperInstance.sectionsRefs[0].value);
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should not call the preventDefault method if a different key than the specified ones are pressed"', () => {
    const wrapper = mount(AccordionProvider, {
      ...providerOptionsWithTwoSections,
    } as any);
    const wrapperInstance = wrapper.vm as any;
    wrapperInstance.activeSection = wrapperInstance.buttonRefs[0].value;

    const keyboardEvent: KeyboardEvent = new KeyboardEvent('KeyS', {
      code: 'KeyS',
    });
    const preventDefaultSpy = jest.spyOn(keyboardEvent, 'preventDefault');

    expect(wrapperInstance.activeSection).toEqual(wrapperInstance.buttonRefs[0].value);
    wrapperInstance.handleKeyDown(keyboardEvent);
    // focus remains on the same section
    expect(wrapperInstance.activeSection).toEqual(wrapperInstance.buttonRefs[0].value);

    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });

  it('should focus an element when the handleButtonFocus method is triggered', () => {
    const wrapper = mount(AccordionProvider, {
      props: {
        sections: [
          {
            label: 'section label',
            body: 'section body',
            expanded: true,
          },
        ],
      },
    } as any);
    const wrapperInstance = wrapper.vm as any;
    expect(wrapperInstance.activeSection).toBeNull();

    wrapperInstance.handleButtonFocus(wrapperInstance.sectionsRefs[0].value.id);
    expect(wrapperInstance.activeSection).toEqual(wrapperInstance.sectionsRefs[0].value);
  });

  it('should blur when triggered to do so', () => {
    const wrapper = mount(AccordionProvider, {
      props: {
        sections: [
          {
            label: 'section label',
            body: 'section body',
            expanded: true,
          },
        ],
      },
    } as any);
    const wrapperInstance = wrapper.vm as any;
    expect(wrapperInstance.activeSection).toBeNull();

    wrapperInstance.handleButtonFocus(wrapperInstance.sectionsRefs[0].value.id);
    expect(wrapperInstance.activeSection).not.toBeNull();

    wrapperInstance.handleButtonBlur(wrapperInstance.activeSection);
    expect(wrapperInstance.activeSection).toBeNull();
  });
});
