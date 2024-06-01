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

<style src="@utrecht/page-footer-css/css/index.scss"></style>
