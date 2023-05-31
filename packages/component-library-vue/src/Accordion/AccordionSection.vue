<script lang="ts">
import {defineComponent, type PropType} from "vue";
import UtrechtButton from "@/Button.vue";
import UtrechtHeading from "@/Heading.vue";
import { v4 as uuidv4 } from 'uuid';
import {useAccordionStore} from "@/store/accordion";

  export default defineComponent({
    name: "UtrechtAccordionSection",
    components: { UtrechtHeading, UtrechtButton },
    props: {
      label: {
        type: String,
        default: "",
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
        type: Object as PropType<HTMLButtonElement>,
        default: null,
        required: false,
      },
    },
    setup(props: any) {
        const store = useAccordionStore();
        const idPrefix = 'utrecht-accordion';
        const idSuffix = uuidv4();
        const id = `${idPrefix}${idSuffix}`;
        const buttonId = `${id}-button`;
        const panelId = `${id}-panel`;
        const panelAttributes = {
            class: { "utrecht-accordion__panel": true, "utrecht-accordion__panel--expanded": props.expanded },
            // Use the `hidden` attribute so the toggle works even without CSS
            hidden: !props.expanded,
            // Use the `aria-hidden` attribute too, so it even works when CSS
            // doesn't use `display: none` to make transitions.
            "aria-hidden": !props.expanded,
        };

        return {
            idPrefix,
            idSuffix,
            id,
            buttonId,
            panelId,
            panelAttributes,
            store
        }
    }
  });
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
        @click="store.handleActivate(<HTMLButtonElement>buttonRef)"
        @focus="store.handleButtonFocus(<HTMLButtonElement>buttonRef)"
        @blur="store.handleButtonBlur()"
      >
        {{ label }}
      </UtrechtButton>
    </UtrechtHeading>
    {section ? (
    <section :id="panelId" :aria-labelledby="buttonId" v-bind="panelAttributes">
      <slot></slot>
    </section>
    ) : (
    <div v-bind="panelAttributes">
      <slot></slot>
    </div>
    )}
  </div>
</template>

<style src="@utrecht/components/accordion/css/index.scss"></style>
