<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtImage',
  props: {
    photo: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
});
</script>

<template>
  <img
    class="utrecht-img"
    v-bind="$attrs"
    :class="{ 'utrecht-img--photo': photo }"
    :alt="$attrs?.alt as string"
    :src="$attrs.src as string"
    :height="$attrs?.height as CSSNumberish"
    :width="$attrs?.width as CSSNumberish"
  />
</template>

<style src="@utrecht/figure-css/dist/index.css"></style>
