<script lang="ts">
  import { defineComponent, type PropType } from "vue";
  type LabelTypes = "radio" | "checkbox" | undefined;
  export default defineComponent({
    name: "UtrechtFormLabel",
    props: {
      checked: { type: Boolean, required: false, default: false },
      disabled: { type: Boolean, required: false, default: false },
      type: { type: String as PropType<LabelTypes>, required: false, default: undefined },
    },
  });
</script>

<template>
  <label
    :class="[
      'utrecht-form-label',
      {'utrecht-form-label--checked': checked},
      {'utrecht-form-label--disabled': disabled},
      {[`utrecht-form-label--${type}`]: type}
    ]"
  >
    <slot />
  </label>
</template>

<style src="@utrecht/components/form-label/css/index.scss"></style>
