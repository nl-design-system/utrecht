<script lang="ts">
  import { defineComponent, ref } from "vue";
  import UtrechtButton from "@/Button.vue";
  import UtrechtHeading from "@/Heading.vue";
  import { useId } from "@/helpers/uniqueId";

  export default defineComponent({
    name: "UtrechtAccordionSection",
    components: { UtrechtHeading, UtrechtButton },
    props: {
      label: {
        type: String,
        default: "",
        required: true,
      },
      body: {
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
      onActivate: {
        type: Function,
        default: null,
        required: false,
      },
      onButtonFocus: {
        type: Function,
        default: null,
        required: false,
      },
      onButtonBlur: {
        type: Function,
        default: null,
        required: false,
      },
      buttonRef: {
        type: HTMLButtonElement,
        default: null,
        required: false,
      },
    },
    data() {
      return {
        idPrefix: "utrecht-accordion",
        idSuffix: useId(),
        id: `${this.idPrefix}${this.idSuffix}`,
        buttonId: `${this.id}-button`,
        panelId: `${this.id}-panel`,
        panelAttributes: {
          class: { "utrecht-accordion__panel": true, "utrecht-accordion__panel--expanded": this.expanded },
          // Use the `hidden` attribute so the toggle works even without CSS
          hidden: !this.expanded,
          // Use the `aria-hidden` attribute too, so it even works when CSS
          // doesn't use `display: none` to make transitions.
          "aria-hidden": !this.expanded,
        },
      };
    },
    methods: { ref },
  });
</script>

<template>
  <div :id="id" class="utrecht-accordion__section">
    <UtrechtHeading :level="headingLevel ?? 1" class="utrecht-accordion__header">
      <UtrechtButton
        :id="buttonId"
        :ref="buttonRef"
        class="utrecht-accordion__button"
        :appearance="'subtle-button'"
        :aria-expanded="expanded === true"
        :aria-controls="panelId"
        :disabled="disabled"
        :on-click="() => typeof onActivate === 'function' && onActivate(ref)"
        :on-focus="() => typeof onButtonFocus === 'function' && onButtonFocus(ref)"
        :on-blur="() => typeof onButtonBlur === 'function' && onButtonBlur(ref)"
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
