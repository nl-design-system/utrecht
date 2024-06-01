<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtParagraph",
  props: {
    lead: { type: Boolean, required: false, default: false },
    small: { type: Boolean, required: false, default: false },
  },
});
</script>

<template>
  <p :class="['utrecht-paragraph', { 'utrecht-paragraph--lead': lead, 'utrecht-paragraph--small': small }]">
    <small v-if="small" class="utrecht-paragraph__small"><slot /></small>
    <slot v-else />
  </p>
</template>

<style src="@utrecht/paragraph-css/css/index.scss"></style>
