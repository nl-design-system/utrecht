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
    :class="[
      'utrecht-link',
      {'utrecht-link--external': external}
      ]"
  >
    <slot />
  </a>
</template>

<style src="@utrecht/components/link/css/index.scss"></style>
