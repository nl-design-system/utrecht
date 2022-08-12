<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtTableCell",
  });
</script>

<template>
  <td class="utrecht-table__cell">
    <slot />
  </td>
</template>

<style src="@utrecht/components/table/css/index.scss"></style>
