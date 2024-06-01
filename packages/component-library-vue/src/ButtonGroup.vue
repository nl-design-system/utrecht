<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtButtonGroup",
});
</script>

<template>
  <div class="utrecht-button-group">
    <slot />
  </div>
</template>

<style src="@utrecht/button-group-css/css/index.scss"></style>
