<script lang="ts">
  import { defineComponent, ref } from "vue";
  import type { PropType } from "vue";

  export type AlertDialogType = "error" | "info" | "warning" | "ok";

  export default defineComponent({
    name: "UtrechtAlertDialog",
    props: {
      icon: {
        type: String,
        default: null,
      },
      type: {
        type: String as PropType<AlertDialogType>,
        default: null,
      },
    },
    setup(props): any {
      // TODO: implement named slot for icon prop as soon as https://github.com/nl-design-system/utrecht/pull/1704 is merged
      const dialogRef = ref<HTMLDialogElement | null>(null);
      return { dialogRef, props };
    },
  });
</script>

<template>
  <dialog
    ref="dialogRef"
    class="utrecht-alert-dialog"
    :class="{'utrecht-alert-dialog--error': type === 'error',
                   'utrecht-alert-dialog--info': type === 'info',
                   'utrecht-alert-dialog--warning': type === 'warning'}"
  >
    <div v-if="icon" class="utrecht-alert-dialog__icon">{{ icon }}</div>
    <div class="utrecht-alert-dialog__message">
      <slot></slot>
    </div>
  </dialog>
</template>

<style src="@utrecht/components/alert-dialog/css/index.scss"></style>
