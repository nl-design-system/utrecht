<script lang="ts">
  import { defineComponent } from "vue";
  import { useModelWrapper } from "./helpers/modelWrapper";
  export default defineComponent({
    name: "UtrechtCheckbox",
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
    type="checkbox"
    :aria-invalid="invalid || undefined"
    :class="[
      'utrecht-checkbox',
      'utrecht-checkbox--html-input',
      { 'utrecht-checkbox--invalid': invalid}
      ]"
  />
</template>

<style src="@utrecht/components/checkbox/css/index.scss"></style>
