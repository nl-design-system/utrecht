<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtNumberBadge',
  props: {
    value: { type: [Number, String], required: false, default: undefined },
  },
});
</script>

<template>
  <data v-if="typeof value !== 'undefined'" class="utrecht-number-badge" :value="value ? String(value) : undefined"
    ><slot
  /></data>
  <span v-else class="utrecht-number-badge"><slot /></span>
</template>

<!-- TODO: use SCSS source instead of pre-built CSS -->
<style src="@utrecht/number-badge-css/dist/index.css"></style>
