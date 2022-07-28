import { computed } from 'vue';

export function useModelWrapper(props: any, emit: any, name = 'modelValue') {
  return computed({
    get: () => props.modelValue,
    set: (value) => emit(`update:${name}`, value),
  });
}
