<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtHeading4",
  });
</script>

<template>
  <h4 class="utrecht-heading-4">
    <slot />
  </h4>
</template>

<style src="@utrecht/components/heading-4/css/index.scss"></style>
