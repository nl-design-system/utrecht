<script lang="ts">
  import { defineComponent } from "vue";
  import type { VNode } from "vue";

  export default defineComponent({
    name: "UtrechtAlert",
    props: {
      icon: { type: Object as () => VNode, required: false },
      type: {
        type: String,
        required: false,
        validator: (value: string) => ["info", "ok", "warning", "error"].includes(value),
      },
    },
  });
</script>

<template>
  <div
    :class="{
    'utrecht-alert--error': type === 'error',
    'utrecht-alert--info': type === 'info',
    'utrecht-alert--ok': type === 'ok',
    'utrecht-alert--warning': type === 'warning',
    }"
    class="utrecht-alert"
  >
    <div v-if="icon" class="utrecht-alert__icon">{{ icon }}</div>
    <div class="utrecht-alert__message"><slot /></div>
  </div>
</template>

<style src="@utrecht/components/alert/css/index.scss"></style>
