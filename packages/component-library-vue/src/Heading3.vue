<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtHeading3",
});
</script>

<template>
  <h3 class="utrecht-heading-3">
    <slot />
  </h3>
</template>

<style src="@utrecht/heading-3-css/dist/index.css"></style>
