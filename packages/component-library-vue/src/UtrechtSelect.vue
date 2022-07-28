<script lang="ts">
  import { defineComponent } from "vue";
  import { useModelWrapper } from "./helpers";

  export default defineComponent({
    props: {
      disabled: { type: Boolean, required: false },
      invalid: { type: Boolean, required: false },
      readonly: { type: Boolean, required: false },
      required: { type: Boolean, required: false },
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
    v-if="options && options.length > 0"
    v-model="selected"
    class="utrecht-select"
    :aria-invalid="invalid || undefined"
    :class="{
      'utrecht-select--disabled': disabled,
      'utrecht-select--invalid': invalid,
      'utrecht-select--required': required,
      'utrecht-select--readonly': readonly,
    }"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
  >
    <option
      v-for="{value, label} in options"
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
