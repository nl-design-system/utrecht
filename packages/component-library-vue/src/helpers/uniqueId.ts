import { ref } from 'vue';

export const useId = (prefix = 'id') => {
  return ref(`${prefix}-${Math.random().toString(36).substring(2, 11)}`);
};
