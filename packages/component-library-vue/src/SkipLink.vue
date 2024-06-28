<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtSkipLink',
  props: {
    href: {
      type: String,
      default: undefined,
      required: false,
    },
  },
});
</script>

<template>
  <a v-bind="$attrs" :href="$props.href" class="utrecht-skip-link utrecht-skip-link--visible-on-focus">
    <slot></slot>
  </a>
</template>

<style src="@utrecht/skip-link-css/dist/index.css"></style>
