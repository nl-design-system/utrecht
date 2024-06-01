<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtPage",
});
</script>

<template>
  <div class="utrecht-page">
    <slot />
  </div>
</template>

<style src="@utrecht/page-css/css/index.scss"></style>
