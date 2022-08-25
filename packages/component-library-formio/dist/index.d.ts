import FormioButton from './button/index';
import FormioCheckbox from './checkbox/index';
import FormioCurrency from './currency/index';
import FormioDateTime from './date-time/index';
import FormioEmail from './email/index';
import FormioHTMLContent from './html-content/index';
import FormioNumber from './number/index';
import FormioPassword from './password/index';
import FormioPhone from './phone/index';
import FormioRadioButton from './radio-button/index';
import FormioTextarea from './textarea/index';
import FormioTextbox from './textbox/index';
import FormioTime from './time/index';
import FormioUrl from './url/index';
export declare const components: {
    button: typeof FormioButton;
    checkbox: typeof FormioCheckbox;
    content: typeof FormioHTMLContent;
    currency: typeof FormioCurrency;
    datetime: typeof FormioDateTime;
    email: typeof FormioEmail;
    number: typeof FormioNumber;
    password: typeof FormioPassword;
    phoneNumber: typeof FormioPhone;
    radio: typeof FormioRadioButton;
    textarea: typeof FormioTextarea;
    textfield: typeof FormioTextbox;
    time: typeof FormioTime;
    url: typeof FormioUrl;
};
export declare const templates: {
    button: {
        form: string;
    };
    checkbox: {
        form: string;
    };
    fieldset: {
        form: string;
    };
    label: {
        form: string;
    };
    radio: {
        form: string;
    };
};
export declare const sanitizeConfig: {
    addTags: string[];
};
