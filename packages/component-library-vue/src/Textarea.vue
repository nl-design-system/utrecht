<script lang="ts">
import { defineComponent } from "vue";
import { useModelWrapper } from "./helpers/modelWrapper";

export default defineComponent({
  name: "UtrechtTextarea",
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
  <textarea
    v-model="value"
    :aria-invalid="invalid || undefined"
    :class="[{ 'utrecht-textarea--invalid': invalid }, 'utrecht-textarea', 'utrecht-textarea--html-textarea']"
    :dir="dir"
  />
</template>

<style src="@utrecht/textarea-css/css/index.scss"></style>
