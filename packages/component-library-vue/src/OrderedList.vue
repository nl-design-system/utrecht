<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtOrderedList",
});
</script>

<template>
  <ol class="utrecht-ordered-list" v-bind="$attrs">
    <slot></slot>
  </ol>
</template>

<style src="@utrecht/components/ordered-list/css/index.scss"></style>
