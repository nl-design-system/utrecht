import type { HTMLAttributes } from 'vue';

export const useMicrodataItem = ({
  prop,
  type,
}: {
  prop?: string;
  type: string;
}): Pick<HTMLAttributes, 'itemprop' | 'itemscope' | 'itemtype'> => ({
  itemscope: true,
  itemtype: type,
  itemprop: prop,
});

export const useMicrodataProp = (prop: string): Pick<HTMLAttributes, 'itemprop'> => ({
  itemprop: prop,
});
