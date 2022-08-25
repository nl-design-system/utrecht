import { type PropType } from "vue";
declare type StatusType = "danger" | "warning" | "safe" | "neutral" | "valid" | "invalid" | "error" | "success" | "active" | "inactive" | undefined;
declare const _sfc_main: import("vue").DefineComponent<{
    status: {
        type: PropType<StatusType>;
        required: false;
        default: undefined;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    status: {
        type: PropType<StatusType>;
        required: false;
        default: undefined;
    };
}>>, {
    status: StatusType;
}>;
export default _sfc_main;
