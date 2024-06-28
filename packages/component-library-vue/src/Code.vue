<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtCode',
});
</script>

<template>
  <code class="utrecht-code">
    <slot />
  </code>
</template>

<style src="@utrecht/code-css/dist/index.css"></style>
