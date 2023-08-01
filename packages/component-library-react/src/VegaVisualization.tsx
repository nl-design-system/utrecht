import clsx from 'clsx';
import { Vega } from 'react-vega';
import { VegaProps } from 'react-vega/lib/Vega';

export interface VegaVisualisationProps extends VegaProps {}

export const VegaVisualization = ({ className, ...restProps }: VegaVisualisationProps) => (
  <Vega {...restProps} renderer={'svg'} className={clsx('utrecht-vega-visualisation', className)} />
);
