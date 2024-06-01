<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtDocument",
});
</script>

<template>
  <div class="utrecht-document">
    <slot />
  </div>
</template>

<style src="@utrecht/document-css/dist/index.css"></style>
