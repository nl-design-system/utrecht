import clsx from 'clsx';
import { Vega } from 'react-vega';
import { VegaProps } from 'react-vega/lib/Vega';

export interface VegaVisualisationProps extends VegaProps {}

export const VegaVisualisation = ({ className, ...restProps }: VegaVisualisationProps) => (
  <Vega {...restProps} className={clsx('utrecht-vega-visualisation', className)} />
);

VegaVisualisation.displayName = 'VegaVisualisation';
