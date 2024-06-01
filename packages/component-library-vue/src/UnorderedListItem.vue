<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtUnorderedListItem",
});
</script>

<template>
  <li class="utrecht-unordered-list__item" v-bind="$attrs">
    <slot></slot>
  </li>
</template>

<style src="@utrecht/unordered-list-css/css/index.scss"></style>
