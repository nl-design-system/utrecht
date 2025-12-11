<script lang="ts">
import { defineComponent, type PropType } from 'vue';

type StatusType =
  | 'danger'
  | 'warning'
  | 'safe'
  | 'neutral'
  | 'valid'
  | 'invalid'
  | 'error'
  | 'success'
  | 'active'
  | 'inactive'
  | undefined;
export default defineComponent({
  name: 'UtrechtStatusBadge',
  props: {
    status: { type: String as PropType<StatusType>, required: false, default: undefined },
  },
});
</script>

<template>
  <span :class="[{ [`utrecht-status-badge--${status}`]: true }, 'utrecht-status-badge']">
    <slot />
  </span>
</template>

<!-- TODO: use SCSS source instead of pre-built CSS -->
<style src="@utrecht/status-badge-css/dist/index.css"></style>
