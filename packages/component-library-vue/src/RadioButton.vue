<script lang="ts">
  import { defineComponent } from "vue";
  import { useModelWrapper } from "./helpers/modelWrapper";

  export default defineComponent({
    name: "UtrechtRadioButton",
    props: {
      appearance: { type: String, required: false, default: "custom" },
      invalid: { type: Boolean, required: false },
      modelValue: { type: [String, Number, Boolean], required: false, default: "" },
    },
    setup(props, { emit }) {
      return {
        value: useModelWrapper(props, emit),
      };
    },
  });
</script>

<template>
  <input
    v-model="value"
    type="radio"
    :aria-invalid="invalid || undefined"
    :class="[
      'utrecht-radio-button',
      'utrecht-radio-button--html-input',
      { 'utrecht-radio-button--invalid': invalid },
      { 'utrecht-radio-button--custom': appearance === 'custom' },
    ]"
  />
</template>

<style src="@utrecht/components/radio-button/css/index.scss"></style>
<style src="@utrecht/components/custom-radio-button/css/index.scss"></style>
