import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import Accordion from "./Accordion.vue";
import {mount} from "@vue/test-utils";


describe('Accordion', () => {
  const containerOptions = {
    slots: {
      default: 'lorem ipsum accordion body'
    }
  };

  it('renders an accordion', () => {
    const {container} = render(Accordion, containerOptions);

    const accordionSection = container.querySelector('div.utrecht-accordion');
    expect(accordionSection).toBeInTheDocument();
  });

  it('renders an accordion heading if a heading string is provided', () => {
    const {container} = render(Accordion, {
      ...containerOptions,
      props: {
        heading: 'accordion heading',
        headingLevel: 1
      }
    });

    const accordionSection = container.querySelector('h1');
    expect(accordionSection).toBeInTheDocument();
  });

  it('should emit an event on keydown', async () => {
    const wrapper = mount(Accordion, {
      ...containerOptions,
      props: {
        heading: 'accordion heading',
        headingLevel: 1
      }
    });
    const spy = jest.spyOn(wrapper.vm as any, 'handleAccordionKeyDown');
    await wrapper.find({ref: 'accordionRef'}).trigger('keydown');
    expect(spy).toHaveBeenCalled();
  });
});
