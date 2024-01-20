<script lang="ts">
import { defineComponent, type PropType } from "vue";

type FormFieldTypes = "checkbox" | "radio" | "text" | undefined;
export default defineComponent({
  name: "UtrechtFormField",
  props: {
    invalid: { type: Boolean, required: false, default: false },
    type: { type: String as PropType<FormFieldTypes>, required: false, default: undefined },
  },
});
</script>

<template>
  <div
    :class="[
      'utrecht-form-field',
      { 'utrecht-form-field--invalid': invalid },
      { 'utrecht-form-field--checkbox': type === 'checkbox' },
      { 'utrecht-form-field--radio': type === 'radio' },
      { 'utrecht-form-field--text': !type || type === 'text' },
    ]"
  >
    <slot />
  </div>
</template>

<style src="@utrecht/components/form-field/css/index.scss"></style>
