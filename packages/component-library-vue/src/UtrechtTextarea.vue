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
  <textarea
    class="utrecht-textarea"
    :aria-invalid="invalid || undefined"
    :class="{
      'utrecht-textarea--disabled': disabled,
      'utrecht-textarea--invalid': invalid,
      'utrecht-textarea--required': required,
      'utrecht-textarea--readonly': readonly,
    }"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :value="modelValue"
    @input="$emit('update:modelValue', (($event as InputEvent).target as HTMLTextAreaElement).value)"
  ></textarea>
</template>

<style src="@utrecht/components/textarea/css/index.scss"></style>
