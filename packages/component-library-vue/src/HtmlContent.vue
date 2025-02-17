<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtHtmlContent',
});
</script>

<template>
  <div class="utrecht-html">
    <slot />
  </div>
</template>

<style src="@utrecht/html-content-css/dist/index.css"></style>
