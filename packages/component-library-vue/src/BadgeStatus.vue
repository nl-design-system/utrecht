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
  name: 'UtrechtBadgeStatus',
  props: {
    status: { type: String as PropType<StatusType>, required: false, default: undefined },
  },
});
</script>

<template>
  <span :class="[{ [`utrecht-badge-status--${status}`]: true }, 'utrecht-badge-status']">
    <slot />
  </span>
</template>

<!-- TODO: use SCSS source instead of pre-built CSS -->
<style src="@utrecht/badge-status-css/dist/index.css"></style>
