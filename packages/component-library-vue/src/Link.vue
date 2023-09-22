<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtLink",
    props: {
      external: { type: Boolean, required: false, default: false },
    },
  });
</script>

<template>
  <a
    :class="['utrecht-link', 'utrecht-link--html-a', { 'utrecht-link--external': external }]"
    :rel="external ? 'external noopener noreferrer' : undefined"
  >
    <slot />
  </a>
</template>

<style src="@utrecht/components/link/css/index.scss"></style>
