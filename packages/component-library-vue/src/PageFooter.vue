<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtPageFooter",
  });
</script>

<template>
  <footer class="utrecht-page-footer">
    <slot />
  </footer>
</template>

<style src="@utrecht/components/page-footer/css/index.scss"></style>
