<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtTableHeaderCell",
});
</script>

<template>
  <th class="utrecht-table__header-cell">
    <slot />
  </th>
</template>

<style src="@utrecht/table-css/dist/index.css"></style>
