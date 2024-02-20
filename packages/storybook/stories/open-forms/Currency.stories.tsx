import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-currency',
  title: 'Open Formulieren/Currency',
  component: SingleFormioComponent,
  args: {
    type: 'currency',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    extraComponentProperties: {
      currency: 'EUR',
      decimalLimit: 2,
      allowNegative: true,
      defaultValue: 0,
    },
  },
};

export const AllowNegative: Story = {
  args: {
    extraComponentProperties: {
      currency: 'EUR',
      decimalLimit: 2,
      allowNegative: true,
      defaultValue: -100,
    },
  },
};

export const AmericanDollars: Story = {
  args: {
    extraComponentProperties: {
      currency: 'USD',
      decimalLimit: 2,
      allowNegative: true,
      defaultValue: 1000.0,
    },
  },
};

export const BritishPound: Story = {
  args: {
    extraComponentProperties: {
      currency: 'GBP',
      decimalLimit: 2,
      allowNegative: true,
      defaultValue: 1000.0,
    },
  },
};

export const JapaneseYen: Story = {
  args: {
    extraComponentProperties: {
      currency: 'JPY',
      decimalLimit: 2,
      allowNegative: true,
      defaultValue: 1000.0,
    },
  },
};

export const SurinaamseDollar: Story = {
  args: {
    extraComponentProperties: {
      currency: 'SRD',
      decimalLimit: 2,
      allowNegative: true,
      defaultValue: 1000.0,
    },
  },
};
