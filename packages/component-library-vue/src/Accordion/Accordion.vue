<script lang="ts">
import {defineComponent, ref} from "vue";

import UtrechtHeading from "@/Heading.vue";
import { v4 as uuidv4 } from 'uuid';
import type AccordionSection from "@/Accordion/AccordionSection.vue";
import {useAccordionStore} from "@/store/accordion";

let defineComponent1 = defineComponent({
    name: "UtrechtAccordion",
    components: { UtrechtHeading },
    props: {
        group: {
            type: Boolean,
            default: "",
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
    },
    setup() {
        const store = useAccordionStore();
        const accordionRef = ref<typeof AccordionSection | null>(null);
        const headingId = uuidv4();

        return {
            accordionRef,
            headingId,
            store
        }
    },
});
export default defineComponent1;
</script>

<template>
  <UtrechtHeading v-if="heading && typeof headingLevel === 'number'" :level="headingLevel ?? 1">
      {{ heading }}
  </UtrechtHeading>
  <div
    ref="accordionRef"
    class="utrecht-accordion"
    :role="group ? 'group' : undefined"
    :aria-labelledby="group ? headingId : undefined"
  >
    <slot></slot>
  </div>
</template>

<style src="@utrecht/components/accordion/css/index.scss"></style>
