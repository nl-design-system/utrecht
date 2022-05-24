<script setup lang="ts">
  defineProps<{
    disabled?: boolean;
  }>();
</script>

<template>
  <option
    class="utrecht-select__option"
    :class="{
      'utrecht-select__option--disabled': disabled,
    }"
    :disabled="disabled"
  >
    <slot />
  </option>
</template>

<style src="@utrecht/components/select/css/index.scss"></style>
