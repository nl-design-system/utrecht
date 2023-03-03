export const isHiddenDesignToken = (token) =>
  !!token && !!token['$extensions'] && token['$extensions']['nl.nldesignsystem.hidden'] === true;
