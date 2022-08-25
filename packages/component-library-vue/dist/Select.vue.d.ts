declare const _sfc_main: import("vue").DefineComponent<{
    invalid: {
        type: BooleanConstructor;
        required: false;
    };
    readonly: {
        type: BooleanConstructor;
        required: false;
    };
    options: {
        type: (ObjectConstructor | ArrayConstructor)[];
        required: true;
    };
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
}, {
    selected: import("vue").WritableComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    invalid: {
        type: BooleanConstructor;
        required: false;
    };
    readonly: {
        type: BooleanConstructor;
        required: false;
    };
    options: {
        type: (ObjectConstructor | ArrayConstructor)[];
        required: true;
    };
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
}>>, {
    invalid: boolean;
    modelValue: string | number | boolean;
    readonly: boolean;
}>;
export default _sfc_main;
