<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtFigureCaption",
  });
</script>

<template>
  <figcaption v-bind="$attrs" class="utrecht-figure__caption">
    <slot></slot>
  </figcaption>
</template>

<style src="@utrecht/components/figure/css/index.scss"></style>
