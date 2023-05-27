<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtAlert",
    props: {
      icon: { type: String, required: false, default: undefined },
      type: {
        type: String,
        required: false,
        validator: (value: string) => ["info", "ok", "warning", "error"].includes(value),
        default: "info",
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
    <div v-if="icon" class="utrecht-alert__icon"><slot name="iconSlot"></slot></div>
    <div class="utrecht-alert__message"><slot></slot></div>
  </div>
</template>

<style src="@utrecht/components/alert/css/index.scss"></style>
