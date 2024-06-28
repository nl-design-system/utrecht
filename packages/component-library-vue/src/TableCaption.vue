<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtTableCaption',
});
</script>

<template>
  <caption class="utrecht-table__caption">
    <slot />
  </caption>
</template>

<style src="@utrecht/table-css/dist/index.css"></style>
