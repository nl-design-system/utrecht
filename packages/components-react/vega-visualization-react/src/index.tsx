/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2025 Frameless B.V.
 * Copyright (c) 2021-2025 Gemeente Utrecht
 */

import clsx from 'clsx';
import { VegaEmbed, VegaEmbedProps } from 'react-vega';
import { Config } from 'vega';

export interface VegaVisualizationProps extends Omit<VegaEmbedProps, 'options'> {
  label?: string;
  config?: Config;
  /**
   * Whether to show the export/source/editor actions. Passed into embed options.
   *
   * @deprecated Use options.actions instead.
   */
  actions?: boolean;
  options?: VegaEmbedProps['options'];
}

const defaultConfig = {
  font: 'var(--utrecht-vega-visualization-font-family, var(--utrecht-document-font-family))',
  title: {
    fontSize: 20,
    anchor: 'start',
    offset: 32,
    subtitleFontSize: 16,
  },
  range: {
    category: { scheme: 'set1' },
  },
  axis: {
    labelFontSize: 16,
    titleFontSize: 16,
    labelFontWeight: 'bold',
    titleFontWeight: 'normal',
    labelAngle: 0,
    ticks: false,
    labelPadding: 12,
    domainColor: 'var(--utrecht-vega-visualization-axis-domain-color, black)',
    gridColor: 'var(--utrecht-vega-visualization-axis-grid-color, gray)',
    tickColor: 'var(--utrecht-vega-visualization-axis-tick-color, black)',
  },
  axisY: {
    titleAngle: 0,
    titleX: 0,
    titleY: 7,
    titleAlign: 'left',
    titleFontWeight: 'bold',
    domain: false,
  },
  legend: { labelFontSize: 16, titleFontSize: 16 },
  bar: { width: { band: 0.85 } },
  view: { stroke: null },
  padding: { left: 20, top: 20, right: 25, bottom: 20 },
  locale: {
    number: {
      decimal: ',',
      thousands: '.',
      grouping: [3],
      currency: ['', '\u00a0€'],
    },
    time: {
      dateTime: '%a %e %B %Y %X',
      date: '%d-%m-%Y',
      time: '%H:%M:%S',
      periods: ['AM', 'PM'],
      days: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
      shortDays: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
      months: [
        'januari',
        'februari',
        'maart',
        'april',
        'mei',
        'juni',
        'juli',
        'augustus',
        'september',
        'oktober',
        'november',
        'december',
      ],
      shortMonths: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    },
  },
} as Config;

export const VegaVisualization = ({
  actions = false,
  className,
  config,
  label,
  options,
  ...restProps
}: VegaVisualizationProps) => {
  const embedOptions: VegaEmbedProps['options'] = {
    ...options,
    actions,
    renderer: 'svg',
    config: { ...defaultConfig, ...config },
  };

  return (
    <div className={clsx('utrecht-vega-visualization', className)} role="img" aria-label={label}>
      <div aria-hidden={true}>
        <VegaEmbed {...restProps} options={embedOptions} />
      </div>
    </div>
  );
};
