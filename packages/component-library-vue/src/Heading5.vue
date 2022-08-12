<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtHeading5",
  });
</script>

<template>
  <h5 class="utrecht-heading-5">
    <slot />
  </h5>
</template>

<style src="@utrecht/components/heading-5/css/index.scss"></style>
