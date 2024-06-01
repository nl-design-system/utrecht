<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtFigure",
});
</script>

<template>
  <figure v-bind="$attrs" class="utrecht-figure">
    <slot></slot>
  </figure>
</template>

<style src="@utrecht/figure-css/css/index.scss"></style>
