<script setup lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { reactive, ref, type Ref } from "vue";
  import UtrechtAccordion from "./Accordion.vue";
  import UtrechtAccordionSection from "./AccordionSection.vue";
  import { firstItem, nextItem, previousItem } from "./helpers/arrayHelpers";

  export interface AccordionSectionProps extends HTMLDivElement {
    id: string;
    label: string;
    body: any;
    headingLevel?: number;
    expanded?: boolean;
    disabled?: boolean;
    section?: boolean;
    buttonId?: string | null;
    onActivate?: Function;
    onButtonFocus?: Function;
    onButtonBlur?: Function;
  }

  export interface ButtonElement {
    id: string;
    sectionId: string;
  }

  const props = defineProps({
    sections: {
      type: Array as () => AccordionSectionProps[],
      required: true,
    },
  });

  defineEmits(["keydown"]);
  const sectionsRefs: Ref<AccordionSectionProps>[] = reactive([]);
  const buttonRefs: Ref<ButtonElement>[] = reactive([]);

  props.sections.forEach((section) => {
    const sectionId = uuidv4();

    sectionsRefs.push(
      ref({
        ...section,
        label: section.label,
        body: section.body,
        id: sectionId,
      }) as Ref<AccordionSectionProps>
    );

    buttonRefs.push(
      ref({
        id: sectionId + "-button",
        sectionId,
      })
    );
  });

  let activeSection: Ref<AccordionSectionProps | null> = ref(null);

  const focusNextSection: () => void = () => {
    if (!activeSection?.value) {
      return;
    }
    const index = sectionsRefs.findIndex((section) => section?.value?.id === activeSection?.value?.id);

    const currentSection = index >= 0 ? sectionsRefs[index] : undefined;
    const nextSection = currentSection ? nextItem(sectionsRefs, currentSection) : null;
    if (nextSection?.value?.id) {
      activeSection.value = nextSection.value;
      document.getElementById(nextSection.value.id)?.focus();
    }
  };

  const focusFirstSection: () => void = () => {
    const firstSection = firstItem(sectionsRefs);
    activeSection.value = firstSection?.value ?? null;

    if (firstSection?.value?.id) {
      document.getElementById(firstSection.value.id)?.focus();
    }
  };

  const focusPreviousSection: () => void = () => {
    if (!activeSection?.value) {
      return;
    }
    const index = sectionsRefs.findIndex((section) => section?.value?.id === activeSection?.value?.id);

    const currentSection = index >= 0 ? sectionsRefs[index] : undefined;
    const previousSection = currentSection ? previousItem(sectionsRefs, currentSection) : null;
    if (previousSection?.value?.id) {
      activeSection.value = previousSection.value;
      document.getElementById(previousSection.value.id)?.focus();
    }
  };

  const focusLastSection: () => void = () => {
    const lastIndex = sectionsRefs.findLastIndex((sectionRef) => sectionRef?.value?.id);
    const lastSection = lastIndex > -1 ? sectionsRefs[lastIndex] : null;
    activeSection.value = lastSection?.value ?? null;

    if (lastSection?.value?.id) {
      document.getElementById(lastSection.value.id)?.focus();
    }
  };

  const handleButtonFocus: (sectionId: string) => void = (sectionId: string) => {
    const sectionToBeFocussed = sectionsRefs.find((sectionsRef) => sectionsRef?.value?.id === sectionId);

    activeSection.value = sectionToBeFocussed?.value ?? null;
    document.getElementById(sectionId)?.focus();
  };

  const handleButtonBlur: () => void = () => {
    if (activeSection?.value === null || activeSection?.value === undefined) {
      return;
    }
    if ("id" in activeSection.value) {
      document.getElementById(activeSection.value.id)?.blur();
    }
    activeSection.value = null;
  };

  const handleActivate: (sectionId: string) => void = (sectionId: string) => {
    const activatedIndex = sectionsRefs.findIndex((sectionRef) => sectionRef?.value?.id === sectionId);
    sectionsRefs.map((section: Ref<AccordionSectionProps>, index: number) => {
      if (activatedIndex > -1 && index === activatedIndex && section?.value) {
        section.value = {
          ...section?.value,
          expanded: section?.value?.expanded !== undefined ? !section?.value?.expanded : undefined,
        } as AccordionSectionProps;
      }

      return section;
    });
  };

  const handleKeyDown = ($event: KeyboardEvent) => {
    if ($event?.code === "End") {
      focusLastSection();
    } else if ($event?.code === "Home") {
      focusFirstSection();
    } else if ($event?.code === "ArrowDown") {
      if (activeSection.value) {
        focusNextSection();
      }
    } else if ($event?.code === "ArrowUp") {
      if (activeSection.value) {
        focusPreviousSection();
      }
    } else {
      // Do not `preventDefault()`
      return;
    }

    // Prevent scrolling the page
    $event?.preventDefault();
  };

  defineExpose({
    activeSection,
    buttonRefs,
    sectionsRefs,
  });
</script>

<script lang="ts">
  export default {
    name: "UtrechtAccordionProvider",
  };
</script>

<template>
  <UtrechtAccordion ref="accordion" @on-key-down="handleKeyDown">
    <template v-for="(section, index) in sectionsRefs" :key="index">
      <UtrechtAccordionSection
        v-if="section"
        ref="sectionsRefs"
        :label="section?.value?.label ?? ''"
        :body="section?.value?.body ?? ''"
        :section-id="section?.value?.id ?? ''"
        :button-id="buttonRefs[index]?.value ? buttonRefs[index].value.id : undefined"
        :expanded="section?.value?.expanded"
        :on-activate="handleActivate"
        :on-button-focus="handleButtonFocus"
        :on-button-blur="handleButtonBlur"
      >
        {{ section?.value?.body }}
      </UtrechtAccordionSection>
    </template>
  </UtrechtAccordion>
</template>
