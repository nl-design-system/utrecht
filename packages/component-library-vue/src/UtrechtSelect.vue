<script lang="ts">
  import { defineComponent } from "vue";
  import { useModelWrapper } from "./helpers/modelWrapper";

  export default defineComponent({
    props: {
      invalid: { type: Boolean, required: false },
      readonly: { type: Boolean, required: false },
      options: { type: [Array, Object], required: true },
      modelValue: { type: [String, Number, Boolean], require: false, default: "" },
    },
    setup(props, { emit }) {
      return {
        selected: useModelWrapper(props, emit),
      };
    },
  });
</script>

<template>
  <select
    v-model="selected"
    :aria-invalid="invalid || undefined"
    :class="[
      {'utrecht-select--invalid': invalid},
      {'utrecht-select--readonly': readonly},
      'utrecht-select--html-select',
      'utrecht-select'
    ]"
    :readonly="readonly"
  >
    <option
      v-for="{value, label, disabled} in options"
      v-if="options && options.length > 0"
      :key="value"
      :value="value"
      :class="[
        {'utrecht-select__option--disabled': disabled},
        'utrecht-select__option']"
      :disabled="disabled"
    >
      {{label}}
    </option>
  </select>
</template>

<style src="@utrecht/components/select/css/index.scss"></style>
