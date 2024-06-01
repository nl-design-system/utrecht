<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtTable",
});
</script>

<template>
  <table class="utrecht-table">
    <slot />
  </table>
</template>

<style src="@utrecht/table-css/dist/index.css"></style>
