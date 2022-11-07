export const argTypes = {
  level: {
    description: 'Heading level',
    control: { type: 'select' },
    options: [1, 2, 3, 4, 5, 6],
  },
  appearance: {
    description: 'Appearance',
    control: { type: 'select' },
    options: [
      undefined,
      'utrecht-heading-1',
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
    ],
  },
};

export const exampleArgs = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};
