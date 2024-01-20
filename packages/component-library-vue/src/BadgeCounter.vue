<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtBadgeCounter",
  props: {
    value: { type: [Number, String], required: false, default: undefined },
  },
});
</script>

<template>
  <data v-if="typeof value !== 'undefined'" class="utrecht-badge-counter" :value="value ? String(value) : undefined"
    ><slot
  /></data>
  <span v-else class="utrecht-badge-counter"><slot /></span>
</template>

<style src="@utrecht/components/badge-counter/css/index.scss"></style>
