<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtFormField",
  });
</script>

<template>
  <div class="utrecht-form-field">
    <slot />
  </div>
</template>

<style src="@utrecht/components/form-field/css/index.scss"></style>
