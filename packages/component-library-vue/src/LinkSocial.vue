<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtLinkSocial",
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
  <a class="utrecht-link-social" v-bind="$attrs" :rel="external !== false ? 'external noopener noreferrer' : undefined">
    <slot></slot>
  </a>
</template>

<style src="@utrecht/components/link-social/css/index.scss"></style>
