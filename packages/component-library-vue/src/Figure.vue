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

<style src="@utrecht/components/figure/css/index.scss"></style>
