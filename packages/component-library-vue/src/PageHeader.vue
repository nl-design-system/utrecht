<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtPageHeader",
  });
</script>

<template>
  <header class="utrecht-page-header">
    <slot />
  </header>
</template>

<style src="@utrecht/components/page-header/css/index.scss"></style>
