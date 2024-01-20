<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtListSocial",
  props: {
    external: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
});
</script>

<template>
  <ul class="utrecht-list-social" v-bind="$attrs">
    <slot></slot>
  </ul>
</template>

<style src="@utrecht/components/list-social/css/index.scss"></style>
