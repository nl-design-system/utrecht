<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtEmphasis",
  });
</script>

<template>
  <em v-bind="$attrs" class="utrecht-emphasis utrecht-emphasis--stressed">
    <slot></slot>
  </em>
</template>

<style src="@utrecht/components/emphasis/css/index.scss"></style>
