<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtHeading4',
});
</script>

<template>
  <h4 class="utrecht-heading-4">
    <slot />
  </h4>
</template>

<style src="@utrecht/heading-4-css/dist/index.css"></style>
