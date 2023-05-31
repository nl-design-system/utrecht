<script lang="ts">
import {defineComponent} from "vue";
import UtrechtAccordion from "@/Accordion/Accordion.vue";
import UtrechtAccordionSection from "@/Accordion/AccordionSection.vue";
import {useAccordionStore} from "@/store/accordion";

export interface Section extends HTMLDivElement {
    headingLevel?: number;
    label: string;
    body: any;
    expanded?: boolean;
    disabled?: boolean;
    section?: boolean;
}

export interface Store {
    methods: StoreMethods,
    state: StoreState
}

export interface StoreMethods {
    handleActivate(section: (Section | null)): void,
    handleKeyDown(evt: KeyboardEvent): void,
    handleButtonBlur(): void,
    focusPreviousSection(): void,
    focusNextSection(): void,
    focusFirstSection(): void,
    handleButtonFocus(index: number): void,
    focusLastSection(): void
}

export interface StoreState {
    sections: Section[];
    buttons: HTMLButtonElement[];
    activeSection: Section | null;
}

  export default defineComponent({
    name: "AccordionProvider",
    components: {
      UtrechtAccordion,
      UtrechtAccordionSection,
    },
    props: {
      sections: {
        type: Array as () => Section[],
        required: true,
      },
    },
    setup(props)  {
        const store = useAccordionStore();
        const sectionElement = document.createElement('div') as Section;
        store.sections = props.sections.map((section) => ({
            ...sectionElement,
            body: section.body,
            label: section.label
        }));
        store.buttons = props.sections.map((_) => (new HTMLButtonElement()));
      return {store};
    },
  });
</script>

<template>
  <UtrechtAccordion ref="accordion" @keydown="store?.handleKeyDown($event)">
      <template v-for="(section, index) in store.sections" :key="index">
          <UtrechtAccordionSection
            :title="section?.title"
            :label="'label text'"
            :button-ref="store.buttons[index]"
            :expanded="section?.expanded"
          >
              {{ section?.body }}
          </UtrechtAccordionSection>
      </template>
  </UtrechtAccordion>
</template>
