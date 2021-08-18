import FormioButton from './button/index';
import FormioButtonTemplate from './button/template';
import FormioCheckbox from './checkbox/index';
import FormioCheckboxTemplate from './checkbox/template';
import FormioCurrency from './currency/index';
import FormioDateTime from './date-time/index';
import FormioEmail from './email/index';
import FormioFieldsetTemplate from './form-fieldset/template';
import FormioFormLabelTemplate from './form-label/template';
import FormioHTMLContent from './html-content/index';
import FormioNumber from './number/index';
import FormioPassword from './password/index';
import FormioPhone from './phone/index';
import FormioRadioButton from './radio-button/index';
import FormioRadioButtonTemplate from './radio-button/template';
import FormioTextarea from './textarea/index';
import FormioTextbox from './textbox/index';
import FormioTime from './time/index';
import FormioUrl from './url/index';

export const components = {
  button: FormioButton,
  checkbox: FormioCheckbox,
  content: FormioHTMLContent,
  currency: FormioCurrency,
  datetime: FormioDateTime,
  email: FormioEmail,
  number: FormioNumber,
  password: FormioPassword,
  phoneNumber: FormioPhone,
  radio: FormioRadioButton,
  textarea: FormioTextarea,
  textfield: FormioTextbox,
  time: FormioTime,
  url: FormioUrl,
};

export const templates = {
  button: { form: FormioButtonTemplate },
  checkbox: { form: FormioCheckboxTemplate },
  fieldset: { form: FormioFieldsetTemplate },
  label: { form: FormioFormLabelTemplate },
  radio: { form: FormioRadioButtonTemplate },
};

export const sanitizeConfig = {
  addTags: [
    'utrecht-article',
    'utrecht-badge-counter',
    'utrecht-badge-data',
    'utrecht-badge-status',
    'utrecht-breadcrumb',
    'utrecht-button',
    'utrecht-checkbox',
    'utrecht-document',
    'utrecht-form-field-checkbox',
    'utrecht-form-field-textbox',
    'utrecht-heading',
    'utrecht-heading-1',
    'utrecht-heading-2',
    'utrecht-heading-3',
    'utrecht-heading-4',
    'utrecht-heading-5',
    'utrecht-heading-6',
    'utrecht-html-content',
    'utrecht-icon-facebook',
    'utrecht-icon-instagram',
    'utrecht-icon-linkedin',
    'utrecht-icon-twitter',
    'utrecht-icon-whatsapp',
    'utrecht-logo',
    'utrecht-page-footer',
    'utrecht-pagination',
    'utrecht-paragraph',
    'utrecht-separator',
    'utrecht-sidenav',
    'utrecht-textbox',
  ],
};
