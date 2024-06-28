<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtTableBody',
});
</script>

<template>
  <tbody class="utrecht-table__body">
    <slot />
  </tbody>
</template>

<style src="@utrecht/table-css/dist/index.css"></style>
