<script setup lang="ts">
  defineEmits<(type: "update:modelValue", value: unknown) => void>();

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

  const isChecked = <T = any>(modelValue: T, value: T) => looseEqual(modelValue, value);

  export default {
    methods: {
      $_handleInputEvent(evtTarget: HTMLInputElement) {
        if (evtTarget.checked) {
          this.$emit("update:modelValue", this.value);
        }
      },
      $_isChecked() {
        return typeof this.modelValue !== "undefined" ? isChecked(this.modelValue, this.value) : this.checked;
      },
    },
  };
</script>

<template>
  <input
    type="radio"
    class="utrecht-radio-button"
    :aria-invalid="invalid || undefined"
    :checked="$_isChecked()"
    :class="{
      'utrecht-radio-button--checked': checked,
      'utrecht-radio-button--disabled': disabled,
      'utrecht-radio-button--invalid': invalid,
      'utrecht-radio-button--required': required,
    }"
    :disabled="disabled"
    :required="required"
    :value="value"
    @input="$_handleInputEvent(($event as InputEvent).target as HTMLInputElement)"
  />
</template>

<style src="@utrecht/components/radio-button/css/index.scss"></style>
