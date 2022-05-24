<script setup lang="ts">
  defineEmits<(_type: "update:modelValue", _value: unknown) => void>();

  defineProps<{
    disabled?: boolean;
    invalid?: boolean;
    modelValue?: string;
    readonly?: boolean;
    required?: boolean;
    type?: string;
  }>();
</script>

<template>
  <input
    class="utrecht-textbox"
    :aria-invalid="invalid || undefined"
    :class="{
      'utrecht-textbox--disabled': disabled,
      'utrecht-textbox--invalid': invalid,
      'utrecht-textbox--required': required,
      'utrecht-textbox--readonly': readonly,
    }"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :value="modelValue"
    @input="$emit('update:modelValue', (($event as InputEvent).target as HTMLInputElement).value)"
  />
</template>

<style src="@utrecht/components/textbox/css/index.scss"></style>
