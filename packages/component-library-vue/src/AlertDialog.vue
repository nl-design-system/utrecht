<script lang="ts">
import { defineComponent, inject, ref, type Ref } from "vue";
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
        dialogRef: {
            type: Object,
            required: true,
        },
    },
    setup(): any {
        const dialogRef = ref<HTMLDialogElement | null>(null);

        // alleen nodig voor optie 2
        const openDialog = () => {
                console.log(dialogRef?.value)
            if (dialogRef?.value) {
                dialogRef.value.showModal();
            }
        };
        return {
            openDialog,
            dialogRef,
        };
    },
});
</script>

<template>
    <dialog ref="dialogRef"
            class="utrecht-alert-dialog"
            :class="{'utrecht-alert-dialog--error': type === 'error',
                   'utrecht-alert-dialog--info': type === 'info',
                   'utrecht-alert-dialog--warning': type === 'warning'}"
    >
        <div v-if="icon" class="utrecht-alert-dialog__icon" v-html="icon"></div>
        <div class="utrecht-alert-dialog__message">
            <slot></slot>
        </div>
    </dialog>
</template>

<style src="@utrecht/components/alert-dialog/css/index.scss"></style>
