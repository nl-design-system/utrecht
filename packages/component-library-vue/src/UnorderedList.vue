<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtUnorderedList",
});
</script>

<template>
  <ul class="utrecht-unordered-list" v-bind="$attrs">
    <slot></slot>
  </ul>
</template>

<style src="@utrecht/unordered-list-css/dist/index.css"></style>
