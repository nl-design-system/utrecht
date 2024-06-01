<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtHeading2",
});
</script>

<template>
  <h2 class="utrecht-heading-2">
    <slot />
  </h2>
</template>

<style src="@utrecht/heading-2-css/dist/index.css"></style>
