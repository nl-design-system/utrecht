<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtFormFieldsetLegend",
});
</script>

<template>
  <legend class="utrecht-form-fieldset__legend">
    <slot />
  </legend>
</template>

<style src="@utrecht/form-fieldset-css/css/index.scss"></style>
