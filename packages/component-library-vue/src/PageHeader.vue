<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtPageHeader',
});
</script>

<template>
  <header class="utrecht-page-header">
    <slot />
  </header>
</template>

<style src="@utrecht/page-header-css/dist/index.css"></style>
