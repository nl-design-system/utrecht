<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid';
import {reactive, ref, type Ref} from "vue";
import UtrechtAccordion from "./Accordion.vue";
import UtrechtAccordionSection from "./AccordionSection.vue";
import {firstItem, lastItem, nextItem, previousItem} from "./helpers/arrayHelpers";

export interface AccordionSectionProps extends HTMLDivElement {
    headingLevel?: number;
    label: string;
    body: any;
    expanded?: boolean;
    disabled?: boolean;
    section?: boolean;
    onActivate?: Function;
    onButtonFocus?: Function;
    onButtonBlur?: Function;
    buttonRef?: ButtonElement|null;
    id: string;
}

export interface ButtonElement {
    id: string;
    sectionId: string;
}

const props = defineProps({
    sections: {
        type: Array as () => AccordionSectionProps[],
        required: true,
    }
})

const emit = defineEmits(['keydown']);
const sectionsRefs: Ref<AccordionSectionProps>[] = reactive([]);
const buttonRefs: Ref<ButtonElement>[] = reactive([]);

props.sections?.forEach((section) => {
    const sectionId = uuidv4();

    sectionsRefs.push(ref({
        ...section,
        label: section.label,
        body: section.body,
        id: sectionId
    }))

    buttonRefs.push(ref({
        id: sectionId + '-button',
        sectionId
    }))
});
console.log('sectionsRefs', sectionsRefs);
console.log('buttonRefs', buttonRefs);

let activeSection = ref(null) as Ref<ButtonElement|null>;

const focusNextSection: () => void = () => {
    if (!activeSection?.value) {
        return;
    }

    const index = sectionsRefs.findIndex(section => section?.value?.id === activeSection.value?.id);
    const button = index >= 0 ? buttonRefs[index] : undefined;
    const nextSectionButton = button ? nextItem(buttonRefs, button) : null;
    if (nextSectionButton?.value?.id) {
      document.getElementById(nextSectionButton?.value?.id)?.focus();
    }
}

const focusFirstSection: () => void = () => {
    const firstSection = firstItem(buttonRefs);
    activeSection = firstSection ?? ref(null);

    if (firstSection?.value?.id) {
        document.getElementById(firstSection?.value?.id)?.focus();
    }
}

const focusPreviousSection: () => void = () => {
    if (!activeSection.value) {
        return;
    }
    const index = sectionsRefs.findIndex(section => section?.value?.id === activeSection?.value?.id);

    const currentSection = index >= 0 ? buttonRefs[index] : undefined;
    const previousSection = currentSection ? previousItem(buttonRefs, currentSection) : null;
    if (previousSection?.value?.id) {
        document.getElementById(previousSection?.value?.id)?.focus();
    }
}

const focusLastSection: () => void = () => {
    const lastSection = lastItem(buttonRefs) ?? null;
    activeSection.value = lastSection?.value ?? null;
    if (lastSection?.value?.id) {
        document.getElementById(lastSection?.value?.id)?.focus();
    }
}

const handleButtonFocus: (buttonId: string) => void = (buttonId: string) => {
    const itemToBeFocussed = buttonRefs.find(buttonRef => buttonRef?.value?.id === buttonId);
    activeSection.value = itemToBeFocussed?.value ?? null;
    document.getElementById(buttonId)?.focus();
}

const handleButtonBlur: (activeSection: Ref<HTMLDivElement | null>) => void = (activeSection: Ref<HTMLDivElement | null>) => {
    if (!activeSection) {
        return;
    }
    activeSection.value = null;
}

const handleActivate: (sectionId: string) => void = (sectionId: string) => {
    const activatedIndex = sectionsRefs.findIndex((sectionRef => sectionRef?.value?.id === sectionId));
    sectionsRefs.map((section: Ref<AccordionSectionProps>, index: number) => {
        if (activatedIndex > -1 && index === activatedIndex && section?.value) {
            section.value = {
                ...section?.value,
                expanded: section?.value?.expanded !== undefined ? !section?.value?.expanded : undefined
            };
        }

        return section;
    })
}

const handleKeyDown = ($event: KeyboardEvent) => {
    if ($event?.code === "End") {
        focusLastSection();
    } else if ($event?.code === "Home") {
        focusFirstSection();
    } else if ($event?.code === "ArrowDown") {
        if (activeSection) {
            focusNextSection();
        }
    } else if ($event?.code === "ArrowUp") {
        if (activeSection) {
            focusPreviousSection();
        }
    } else {
        // Do not `preventDefault()`
        return;
    }

    // Prevent scrolling the page
    $event?.preventDefault();
}

defineExpose({
    activeSection,
    buttonRefs,
    sectionsRefs,
});
</script>

<script lang="ts">
export default {
    name: "UtrechtAccordionProvider"
}
</script>

<template>
  <UtrechtAccordion
          ref="accordion"
          @onKeyDown="handleKeyDown"
  >
      <template v-for="(section, index) in sectionsRefs" :key="index">
          <UtrechtAccordionSection
            v-if="section"
            :label="section?.value?.label ?? ''"
            :body="section?.value?.body ?? ''"
            :section-id="section?.value?.id ?? ''"
            :button-ref="buttonRefs[index] ? buttonRefs[index] : undefined"
            :expanded="section?.value?.expanded"
            :on-activate="handleActivate"
            :on-button-focus="handleButtonFocus"
            :on-button-blur="handleButtonBlur"
            :ref="el => { buttonRefs[index] = el }"
          >
              {{ section?.value?.body }}
          </UtrechtAccordionSection>
      </template>
  </UtrechtAccordion>
</template>
