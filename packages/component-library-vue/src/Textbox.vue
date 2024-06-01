<script lang="ts">
import { defineComponent } from "vue";
import { useModelWrapper } from "./helpers/modelWrapper";

export default defineComponent({
  name: "UtrechtTextbox",
  props: {
    dir: { type: String, required: false, default: "auto" },
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
    :class="[{ 'utrecht-textbox--invalid': invalid }, 'utrecht-textbox', 'utrecht-textbox--html-input']"
    :dir="dir"
  />
</template>

<style src="@utrecht/textbox-css/css/index.scss"></style>
