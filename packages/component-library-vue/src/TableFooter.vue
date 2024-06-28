<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtTableFooter',
});
</script>

<template>
  <tfoot class="utrecht-table__footer">
    <slot />
  </tfoot>
</template>

<style src="@utrecht/table-css/dist/index.css"></style>
