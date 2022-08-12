<script lang="ts">
  import { defineComponent } from "vue";
  import { useModelWrapper } from "./helpers/modelWrapper";

  export default defineComponent({
    name: "UtrechtTextbox",
    props: {
      invalid: { type: Boolean, required: false },
      modelValue: { type: [String, Number, Boolean], require: false, default: "" },
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
    :aria-invalid="invalid || undefined"
    :class="[
      { 'utrecht-textbox--invalid': invalid },
      'utrecht-textbox',
      'utrecht-textbox--html-input'
    ]"
  />
</template>

<style src="@utrecht/components/textbox/css/index.scss"></style>
