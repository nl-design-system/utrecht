import { type PropType } from "vue";
declare type AppearanceType = "primary-action-button" | "secondary-action-button" | "subtle-button" | undefined;
declare type ButtonTypes = "button" | "reset" | "submit";
declare const _sfc_main: import("vue").DefineComponent<{
    appearance: {
        type: PropType<AppearanceType>;
        required: false;
        default: undefined;
    };
    type: {
        type: PropType<ButtonTypes>;
        required: false;
        default: string;
    };
    busy: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    appearance: {
        type: PropType<AppearanceType>;
        required: false;
        default: undefined;
    };
    type: {
        type: PropType<ButtonTypes>;
        required: false;
        default: string;
    };
    busy: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    type: ButtonTypes;
    appearance: AppearanceType;
    busy: boolean;
}>;
export default _sfc_main;
