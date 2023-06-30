import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import AccordionSection from './AccordionSection.vue';
describe('AccordionSection', () => {
  const containerOptions = {
    props: {
      label: 'accordion section label',
      sectionId: 'sectionId',
    },
    slots: {
      default: 'lorem ipsum body',
    },
  };

  it('renders an html div element', () => {
    const { container } = render(AccordionSection, containerOptions);

    const accordionSection = container.querySelector('.utrecht-accordion__section');
    expect(accordionSection).toBeInTheDocument();
  });

  it('renders a heading element', () => {
    const { container } = render(AccordionSection, containerOptions);

    const heading = container.querySelector('.utrecht-accordion__header');
    expect(heading).toBeVisible();
  });

  it('render a section element if section is true', () => {
    const { container } = render(AccordionSection, {
      ...containerOptions,
      props: {
        ...containerOptions.props,
        section: true,
      },
    });

    const section = container.querySelector('section.utrecht-accordion__panel');
    expect(section).toBeInTheDocument();
  });

  it('render a div element if section is false', () => {
    const { container } = render(AccordionSection, {
      ...containerOptions,
      props: {
        ...containerOptions.props,
        section: false,
      },
    });

    const sectionDiv = container.querySelector('div.utrecht-accordion__panel');
    expect(sectionDiv).toBeInTheDocument();
  });

  it('render a hidden section if expanded is false', () => {
    const { container } = render(AccordionSection, {
      ...containerOptions,
      props: {
        ...containerOptions.props,
        section: true,
        expanded: false,
      },
    });

    const sectionDiv = container.querySelector('section.utrecht-accordion__panel');
    expect(sectionDiv).toBeInTheDocument();
    expect(sectionDiv).not.toBeVisible();
  });

  it('render a hidden section if expanded is true', () => {
    const { container } = render(AccordionSection, {
      ...containerOptions,
      props: {
        ...containerOptions.props,
        section: true,
        expanded: true,
      },
    });

    const sectionDiv = container.querySelector('section.utrecht-accordion__panel');
    expect(sectionDiv).toBeInTheDocument();
    expect(sectionDiv).toBeVisible();
  });

  it('render a hidden div if expanded is false', () => {
    const { container } = render(AccordionSection, {
      ...containerOptions,
      props: {
        ...containerOptions.props,
        section: false,
        expanded: false,
      },
    });

    const sectionDiv = container.querySelector('div.utrecht-accordion__panel');
    expect(sectionDiv).toBeInTheDocument();
    expect(sectionDiv).not.toBeVisible();
  });

  it('render a visible div if expanded is true', () => {
    const { container } = render(AccordionSection, {
      ...containerOptions,
      props: {
        ...containerOptions.props,
        section: false,
        expanded: true,
      },
    });

    const sectionDiv = container.querySelector('div.utrecht-accordion__panel');
    expect(sectionDiv).toBeInTheDocument();
    expect(sectionDiv).toBeVisible();
  });
});
