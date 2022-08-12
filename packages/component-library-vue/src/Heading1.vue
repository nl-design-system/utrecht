<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtHeading1",
  });
</script>

<template>
  <h1 class="utrecht-heading-1">
    <slot />
  </h1>
</template>

<style src="@utrecht/components/heading-1/css/index.scss"></style>
