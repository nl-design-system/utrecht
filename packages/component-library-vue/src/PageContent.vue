<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtPageContent",
});
</script>

<template>
  <div class="utrecht-page-content">
    <slot />
  </div>
</template>

<style src="@utrecht/page-content-css/css/index.scss"></style>
