<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtOrderedListItem",
});
</script>

<template>
  <li class="utrecht-ordered-list__item" v-bind="$attrs">
    <slot></slot>
  </li>
</template>

<style src="@utrecht/components/ordered-list/css/index.scss"></style>
