<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtParagraph",
    props: {
      lead: { type: Boolean, required: false, default: false },
    },
  });
</script>

<template>
  <p
    :class="[
    'utrecht-paragraph',
    { 'utrecht-paragraph--lead': lead }
    ]"
  >
    <slot />
  </p>
</template>

<style src="@utrecht/components/paragraph/css/index.scss"></style>
