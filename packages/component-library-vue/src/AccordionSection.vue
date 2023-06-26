<script setup lang="ts">
import {type PropType, type Ref, toRefs} from "vue";
import UtrechtButton from './Button.vue';
import UtrechtHeading from './Heading.vue';
import { v4 as uuidv4 } from 'uuid';
import type {AccordionSectionProps, ButtonElement} from "@/AccordionProvider.vue";

const props = defineProps({
    label: {
        type: String,
        default: "",
        required: true,
    },
    sectionId: {
        type: String,
        default: null,
        required: true,
    },
    headingLevel: {
        type: Number,
        default: 1,
        required: false,
    },
    expanded: {
        type: Boolean,
        default: false,
        required: false,
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false,
    },
    section: {
        type: Boolean,
        default: false,
        required: false,
    },
    buttonRef: {
        type: Object as PropType<Ref<ButtonElement|null>>,
        default: null,
        required: false,
    },
    onActivate: {
        type: Function,
        default: null,
        required: false
    },
    onButtonFocus: {
        type: Function,
        default: null,
        required: false
    },
    onButtonBlur: {
        type: Function,
        default: null,
        required: false
    },
});

defineEmits(['keydown']);

const {
    buttonRef,
    disabled,
    expanded,
    headingLevel,
    label,
    section,
    onActivate,
    onButtonFocus,
    onButtonBlur
} = toRefs(props);

const idPrefix = 'utrecht-accordion';
const idSuffix = uuidv4();
const id = `${idPrefix}-${idSuffix}`;
const buttonId = props.buttonRef?.value?.id;
const panelId = `${id}-panel`;
const sectionId = props.sectionId;
</script>

<script lang="ts">
  export default {
      name: "UtrechtAccordionSection"
  }
</script>


<template>
  <div :id="id" class="utrecht-accordion__section">
    <UtrechtHeading :level="headingLevel ?? 1" class="utrecht-accordion__header">
      <UtrechtButton
        :id="buttonId"
        ref="buttonRef"
        class="utrecht-accordion__button"
        :appearance="'subtle-button'"
        :aria-expanded="expanded === true"
        :aria-controls="panelId"
        :disabled="disabled"
        @click="() => typeof onActivate === 'function' && onActivate(sectionId)"
        @focus="() => typeof onButtonFocus === 'function' && onButtonFocus(buttonId)"
        @blur="() => typeof onButtonBlur === 'function' && onButtonBlur()"
      >
        {{ label }}
      </UtrechtButton>
    </UtrechtHeading>
    <section
            v-if="section"
            :id="panelId"
            :aria-labelledby="buttonId"
            :class="{'utrecht-accordion__panel': true, 'utrecht-accordion__panel--expanded': expanded}"
            :hidden="!expanded"
            :aria-hidden="!expanded"
    >
      <slot></slot>
    </section>
    <div
         v-else
         :class="{'utrecht-accordion__panel': true, 'utrecht-accordion__panel--expanded': expanded}"
         :hidden="!expanded"
         :aria-hidden="!expanded"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style src="@utrecht/components/accordion/css/index.scss"></style>
