<script lang="ts">
  import { defineComponent, type PropType } from "vue";

  type StatusType =
    | "danger"
    | "warning"
    | "safe"
    | "neutral"
    | "valid"
    | "invalid"
    | "error"
    | "success"
    | "active"
    | "inactive"
    | undefined;
  export default defineComponent({
    name: "UtrechtBadgeStatus",
    props: {
      status: { type: String as PropType<StatusType>, required: false, default: undefined },
    },
  });
</script>

<template>
  <span
    :class="[
      {[`utrecht-badge-status--${status}`]: true},
      'utrecht-badge-status'
    ]"
  >
    <slot />
  </span>
</template>

<style src="@utrecht/components/badge-status/css/index.scss"></style>
