// TODO: Use more accurate version when React supports `<div hidden="until-found">`
/*
export const hidden = {
  description: 'Hidden',
  control: { type: 'select' },
  options: {
    undefined: undefined,
    '': true, // map to React `hidden` property
    hidden: 'hidden',
    'until-found': 'until-found',
  },
};
*/
export const hidden = {
  description: 'Hidden',
  control: 'boolean',
};
