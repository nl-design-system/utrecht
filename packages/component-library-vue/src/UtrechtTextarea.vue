<script lang="ts">
  import { defineComponent } from "vue";
  import { useModelWrapper } from "./helpers/modelWrapper";

  export default defineComponent({
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
  <textarea
    v-model="value"
    :aria-invalid="invalid || undefined"
    :class="[
    { 'utrecht-textarea--invalid': invalid },
    'utrecht-textarea',
    'utrecht-textarea--html-textarea'
    ]"
  />
</template>

<style src="@utrecht/components/textarea/css/index.scss"></style>
