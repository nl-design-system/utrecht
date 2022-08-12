<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtFormFieldset",
  });
</script>

<template>
  <fieldset class="utrecht-form-fieldset">
    <slot />
  </fieldset>
</template>

<style src="@utrecht/components/form-fieldset/css/index.scss"></style>
