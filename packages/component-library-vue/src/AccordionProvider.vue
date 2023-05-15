<script lang="ts">
  import { computed, defineComponent, Ref, ref, watchEffect } from "vue";
  import UtrechtAccordion from "@/Accordion.vue";
  import UtrechtAccordionSection from "@/AccordionSection.vue";

  interface Section {
    title: string;
    body: string;
    expanded: boolean;
  }

  interface AccordionProviderProps {
    sections: Section[];
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
    setup(props: AccordionProviderProps): any {
      const refs = ref<(HTMLElement | null)[]>([]);
      const buttonRefs = ref<(HTMLElement | null)[]>([]);
      const activeElement = ref<HTMLElement | null>(null);
      const sectionsState = computed(() => props.sections);
      const { focusNextSection, focusFirstSection, focusLastSection, focusPreviousSection } = useAccordion(
        props.sections,
        refs
      );

      const handleKeyDown = (evt: KeyboardEvent) => {
        if (evt.code === "End") {
          focusLastSection();
        } else if (evt.code === "Home") {
          focusFirstSection();
        } else if (evt.code === "ArrowDown") {
          if (activeElement.value) {
            focusNextSection(activeElement.value);
          }
        } else if (evt.code === "ArrowUp") {
          if (activeElement.value) {
            focusPreviousSection(activeElement.value);
          }
        } else {
          // Do not `preventDefault()`
          return;
        }

        // Prevent scrolling the page
        evt.preventDefault();
      };

      function handleActivate(ref: Ref<HTMLElement | null>) {
        const activatedIndex = refs.value.indexOf(ref.value);
        if (activatedIndex >= 0) {
          sectionsState.value[activatedIndex].expanded = !sectionsState.value[activatedIndex].expanded;
        }
      }

      function handleButtonFocus(ref: Ref<HTMLElement | null>) {
        activeElement.value = ref.value;
      }

      function handleButtonBlur() {
        activeElement.value = null;
      }

      // watchEffect(() => {
      //     refs.value = [];
      //     buttonRefs.value = [];
      //     sectionsState.value.forEach((_, index) => {
      //         refs.value[index] = ref(null);
      //         buttonRefs.value[index] = ref(null);
      //     });
      // });

      return {
        refs,
        buttonRefs,
        activeElement,
        handleKeyDown,
        handleButtonFocus,
        handleButtonBlur,
        sectionsState,
        handleActivate,
      };
    },
  });
</script>

<template>
  <UtrechtAccordion ref="accordion" @keydown="handle">
    <UtrechtAccordionSection
      v-for="(section, index) in sectionsState"
      :key="index"
      :title="section.title"
      :expanded="section.expanded"
      :on-activate="() => handleActivate(refs[index])"
      body=""
      label=""
    >
      {{ section.body }}
    </UtrechtAccordionSection>
  </UtrechtAccordion>
</template>
