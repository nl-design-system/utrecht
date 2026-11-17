/* @license CC0-1.0 */

// Renders formio components with formio-renderer 1.8, the renderer of the Open Forms SDK 3.5 for forms
// with the new renderer enabled. Loaded lazily by StoryUtil, so formio.js stories don't load it.

import { FormioForm } from '@open-formulieren/formio-renderer-1';
import nlMessages from '@open-formulieren/formio-renderer-1/i18n/compiled/nl.json';
import React, { ComponentProps } from 'react';
import { IntlProvider } from 'react-intl-sdk';

type FormioFormProps = ComponentProps<typeof FormioForm>;

type Component = { key: string; id?: string; components?: Component[]; [index: string]: any };

// The formio-renderer needs an `id` for each component. Open Forms sets it, the stories often don't.
const withIds = (components: Component[]): Component[] =>
  components.map((component) => ({
    ...component,
    id: component.id ?? component.key,
    ...(component.components && { components: withIds(component.components) }),
  }));

const onSubmit = async () => {};

const FormioRendererForm = ({ components }: { components: Component[] }) => (
  <IntlProvider locale="nl" messages={nlMessages}>
    <FormioForm components={withIds(components) as FormioFormProps['components']} onSubmit={onSubmit} />
  </IntlProvider>
);

export default FormioRendererForm;
