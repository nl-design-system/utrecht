<script setup lang="ts">
type CheckboxModelValue = Set<any> | Array<any> | number | string | boolean;

type CheckboxValue = any;

type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  invalid?: boolean;
  modelValue?: CheckboxModelValue;
  required?: boolean;
  value?: CheckboxValue;
  trueValue?: CheckboxValue;
  falseValue?: CheckboxValue;
};

defineEmits<(_type: "update:modelValue", _value: CheckboxModelValue) => void>();

defineProps<CheckboxProps>();
</script>

<script lang="ts">
// eslint-disable-next-line vue/prefer-import-from-vue
import { looseEqual } from "@vue/shared";

// TODO: Use `_.isSet`
const isSet = <T = any>(arg: any): arg is Set<T> => arg instanceof Set;

// Returns `true` when both Sets have the same values
const isSameSet = (setA: Set, setB: Set): boolean => {
  if (setA.size === setB.size) {
    // FIXME: Somehow Jest doesn't get `of setB`, falling back to `Array.from(setB)` instead
    // at the cost of performance.
    for (const item of Array.from(setB)) {
      if (!setA.has(item)) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const isChecked = <T = CheckboxValue>(modelValue: T, value: T): boolean => {
  if (Array.isArray(modelValue)) {
    return Array.isArray(value) ? isSameSet(new Set(modelValue), new Set(value)) : modelValue.includes(value);
  } else if (isSet(modelValue)) {
    return isSet(value) ? isSameSet(modelValue, value) : modelValue.has(value);
  } else {
    return typeof modelValue !== "undefined" && typeof value !== "undefined" && looseEqual(modelValue, value);
  }
};

const toggleValue = <T = CheckboxValue>(
  modelValue: T,
  trueValue: T,
  falseValue?: CheckboxValue
): Array<T> | Set<T> | string => {
  if (Array.isArray(modelValue)) {
    // Step 1: exclude `trueValue`
    let newArray = Array.isArray(trueValue)
      ? modelValue.filter((item) => !trueValue.includes(item))
      : modelValue.filter((item) => item !== trueValue);

    // Step 2: include `falseValue`
    if (Array.isArray(falseValue)) {
      newArray = [...newArray, ...falseValue.filter((item) => !newArray.includes(item))];
    } else if (typeof falseValue !== "undefined") {
      newArray.push(falseValue);
    }
    return newArray;
  } else if (isSet(modelValue)) {
    const set = new Set<T>(modelValue);

    // Step 1: exclude `trueValue`
    if (isSet(trueValue)) {
      trueValue.forEach((item) => set.delete(item));
    } else {
      set.delete(trueValue);
    }

    // Step 2: include `falseValue`
    if (isSet(falseValue)) {
      for (let item of falseValue) {
        set.add(item);
      }
    } else if (typeof falseValue !== "undefined") {
      set.add(falseValue);
    }

    return set;
  } else {
    return falseValue;
  }
};

// Use 1) `:true-value`, 2) `:value`, 3) true
const getTrueValue = (props: CheckboxProps) =>
  typeof props.trueValue !== "undefined" ? props.trueValue : typeof props.value !== "undefined" ? props.value : true;

// Use 1) `:false-value`, 3) false
const getFalseValue = (props: CheckboxProps) => (typeof props.falseValue !== "undefined" ? props.falseValue : false);

export default {
  methods: {
    $_handleInputEvent(_evt: InputEvent) {
      const { modelValue } = this;
      const trueValue = getTrueValue(this);
      const isTrue = isChecked(modelValue, trueValue);
      const isFalse = typeof this.falseValue !== "undefined" ? isChecked(modelValue, this.falseValue) : !isTrue;
      const indeterminate = isTrue === isFalse;

      let newModelValue = isTrue
        ? toggleValue(modelValue, trueValue, this.falseValue)
        : toggleValue(modelValue, this.falseValue, trueValue);

      this.$emit("update:modelValue", newModelValue);
    },
    $_isChecked() {
      const isTrue = isChecked(this.modelValue, getTrueValue(this));
      const isFalse = isChecked(this.modelValue, getFalseValue(this));

      return isTrue && isTrue !== isFalse;
    },
    $_isIndeterminate() {
      const isTrue = isChecked(this.modelValue, getTrueValue(this));
      const isFalse = typeof this.falseValue !== "undefined" ? isChecked(this.modelValue, this.falseValue) : !isTrue;

      return isTrue === isFalse;
    },
  },
};
</script>

<template>
  <input
    type="checkbox"
    class="utrecht-checkbox"
    :aria-invalid="invalid || undefined"
    :checked="checked || $_isChecked()"
    :class="{
      'utrecht-checkbox--checked': checked || $_isChecked(),
      'utrecht-checkbox--disabled': disabled,
      'utrecht-checkbox--invalid': invalid,
      'utrecht-checkbox--indeterminate': indeterminate || $_isIndeterminate(),
      'utrecht-checkbox--required': required,
    }"
    :disabled="disabled"
    :indeterminate="indeterminate || $_isIndeterminate() ? true : undefined"
    :required="required"
    :value="value"
    @input="$_handleInputEvent($event as InputEvent)"
  />
</template>

<style src="@utrecht/components/checkbox/css/index.scss"></style>
