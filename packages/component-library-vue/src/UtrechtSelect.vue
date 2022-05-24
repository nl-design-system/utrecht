<script setup lang="ts">
  defineEmits<(_type: "update:modelValue", _value: unknown) => void>();

  defineProps<{
    disabled?: boolean;
    invalid?: boolean;
    modelValue?: string;
    readonly?: boolean;
    required?: boolean;
  }>();
</script>

<template>
  <select
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
    :value="modelValue"
    @input="$emit('update:modelValue', (($event as InputEvent).target as HTMLSelectElement).value)"
  >
    <slot />
  </select>
</template>

<style src="@utrecht/components/select/css/index.scss"></style>
