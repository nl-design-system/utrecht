<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtTableBody",
  });
</script>

<template>
  <tbody class="utrecht-table__body">
    <slot />
  </tbody>
</template>

<style src="@utrecht/components/table/css/index.scss"></style>
