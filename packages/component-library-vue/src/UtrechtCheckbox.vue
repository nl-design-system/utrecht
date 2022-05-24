<script setup lang="ts">
  defineEmits<(_type: "update:modelValue", _value: unknown) => void>();

  defineProps<{
    checked?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    modelValue?: string;
    required?: boolean;
    value?: string;
  }>();
</script>

<script lang="ts">
  // eslint-disable-next-line vue/prefer-import-from-vue
  import { looseEqual } from "@vue/shared";

  // TODO: Use `_.isSet`
  const isSet = (arg: any): arg is Set<any> => arg instanceof Set;

  const isChecked = <T = any>(modelValue: T, value: T): boolean => {
    if (Array.isArray(modelValue)) {
      return modelValue.includes(value);
    } else if (modelValue instanceof Set) {
      return modelValue.has(value);
    } else {
      return looseEqual(modelValue, value);
    }
  };

  const checkValue = <T = any>(modelValue: T | Array<T> | Set<T>, value: T): T | Array<T> | Set<T> => {
    if (Array.isArray(modelValue)) {
      return [...modelValue, value];
    } else if (isSet(modelValue)) {
      return new Set<T>(modelValue).add(value);
    } else {
      return value;
    }
  };

  const uncheckValue = <T = any>(modelValue: T, value: T): Array<T> | Set<T> | string => {
    if (Array.isArray(modelValue)) {
      return modelValue.filter((item) => item !== value);
    } else if (isSet(modelValue)) {
      const set = new Set<T>(modelValue);
      set.delete(value);
      return set;
    } else {
      return "";
    }
  };

  export default {
    methods: {
      $_handleInputEvent(_evt: InputEvent) {
        const { value, modelValue } = this;
        const newValue = isChecked(modelValue, value) ? uncheckValue(modelValue, value) : checkValue(modelValue, value);
        this.$emit("update:modelValue", newValue);
      },
      $_isChecked() {
        return isChecked(this.modelValue, this.value);
      },
    },
  };
</script>

<template>
  <input
    type="checkbox"
    class="utrecht-checkbox"
    :aria-invalid="invalid || undefined"
    :checked="typeof checked === 'boolean' ? checked : $_isChecked()"
    :class="{
      'utrecht-checkbox--checked': checked || $_isChecked(),
      'utrecht-checkbox--disabled': disabled,
      'utrecht-checkbox--invalid': invalid,
      'utrecht-checkbox--required': required,
    }"
    :disabled="disabled"
    :required="required"
    :value="value"
    @input="$_handleInputEvent($event as InputEvent)"
  />
</template>

<style src="@utrecht/components/checkbox/css/index.scss"></style>
