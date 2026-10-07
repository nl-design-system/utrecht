<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtImage',
  props: {
    alt: {
      type: String,
      required: false,
    },
    height: {
      type: [String, Number],
      required: false,
    },
    photo: {
      type: Boolean,
      default: false,
      required: false,
    },
    src: {
      type: String,
      required: false,
    },
    width: {
      type: [String, Number],
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
    :alt="alt"
    :src="src"
    :height="height"
    :width="width"
  />
</template>

<style src="@utrecht/figure-css/dist/index.css"></style>
