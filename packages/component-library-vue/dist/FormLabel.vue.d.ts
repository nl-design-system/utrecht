import { type PropType } from "vue";
declare type LabelTypes = "radio" | "checkbox" | undefined;
declare const _sfc_main: import("vue").DefineComponent<{
    checked: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    type: {
        type: PropType<LabelTypes>;
        required: false;
        default: undefined;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    checked: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    type: {
        type: PropType<LabelTypes>;
        required: false;
        default: undefined;
    };
}>>, {
    type: LabelTypes;
    checked: boolean;
    disabled: boolean;
}>;
export default _sfc_main;
