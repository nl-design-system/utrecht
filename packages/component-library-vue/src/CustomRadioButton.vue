<script lang="ts">
  import { defineComponent } from "vue";
  import { useModelWrapper } from "./helpers/modelWrapper";

  export default defineComponent({
    name: "UtrechtCustomRadioButton",
    props: {
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
        { 'utrecht-custom-radio-button--invalid': invalid },
        'utrecht-custom-radio-button',
        'utrecht-custom-radio-button--html-input'
    ]"
  />
</template>

<style src="@utrecht/components/custom-radio-button/css/index.scss"></style>
