<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid';
import {ref, type Ref, toRefs} from "vue";
import UtrechtHeading from "./Heading.vue";
import type { AccordionSectionProps } from "./AccordionProvider.vue";

const props = defineProps({
    group: {
        type: Boolean,
        default: false,
        required: false,
    },
    heading: {
        type: String,
        default: "",
        required: false,
    },
    headingLevel: {
        type: Number,
        default: 2,
        required: false,
    },
    onKeyDown: {
        type: Function,
        default: null,
        required: false
    }
});

const emit = defineEmits(['keydown', 'onKeyDown']);

const {group, heading, headingLevel} = toRefs(props);
const accordionRef = ref(null) as Ref<AccordionSectionProps | null>;
const headingId = uuidv4();

const handleAccordionKeyDown = ($event: any) => {
    emit('onKeyDown', $event);
}
</script>

<script lang="ts">
export default {
    name: "UtrechtAccordion"
}
</script>

<template>
  <UtrechtHeading
    v-if="heading && typeof headingLevel === 'number'"
    :level="headingLevel ?? 1"
  >
      {{ heading }}
  </UtrechtHeading>
  <div
    ref="accordionRef"
    class="utrecht-accordion"
    :role="group ? 'group' : undefined"
    :aria-labelledby="group ? headingId : undefined"
    @keydown="handleAccordionKeyDown($event)"
  >
    <slot></slot>
  </div>
</template>

<style src="@utrecht/components/accordion/css/index.scss"></style>
