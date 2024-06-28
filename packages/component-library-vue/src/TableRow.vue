<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtTableRow',
});
</script>

<template>
  <tr class="utrecht-table__row">
    <slot />
  </tr>
</template>

<style src="@utrecht/table-css/dist/index.css"></style>
