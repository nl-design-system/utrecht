<script lang="ts">
  import { defineComponent, type PropType } from "vue";
  type AppearanceType = "primary-action-button" | "secondary-action-button" | "subtle-button" | undefined;
  type ButtonTypes = "button" | "reset" | "submit";
  export default defineComponent({
    name: "UtrechtButton",
    props: {
      appearance: { type: String as PropType<AppearanceType>, required: false, default: undefined },
      type: { type: String as PropType<ButtonTypes>, required: false, default: "button" },
      busy: { type: Boolean, required: false, default: false },
    },
  });
</script>

<template>
  <button
    :aria-busy="busy || undefined"
    :class="[
    'utrecht-button',
    { 'utrecht-button--busy': busy },
    { 'utrecht-button--primary-action': appearance === 'primary-action-button' },
    { 'utrecht-button--secondary-action': appearance === 'secondary-action-button' },
    { 'utrecht-button--submit': type === 'submit' },
    { 'utrecht-button--subtle': appearance === 'subtle-button' },
  ]"
    :type="type"
  >
    <slot />
  </button>
</template>

<style src="@utrecht/components/button/css/index.scss"></style>
