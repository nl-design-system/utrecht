<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtTableHeader",
  });
</script>

<template>
  <thead class="utrecht-table__header">
    <slot />
  </thead>
</template>

<style src="@utrecht/components/table/css/index.scss"></style>
