<script lang="ts">
  import { defineComponent } from "vue";
  import { useModelWrapper } from "./helpers/modelWrapper";
  export default defineComponent({
    name: "UtrechtRadioButton",
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
      'utrecht-radio-button',
      {'utrecht-radio-button--invalid': invalid}
    ]"
  />
</template>

<style src="@utrecht/components/radio-button/css/index.scss"></style>
