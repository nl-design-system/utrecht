import clsx from 'clsx';
import { Vega } from 'react-vega';
import { VegaProps } from 'react-vega/lib/Vega';
import { Config } from 'vega';

export interface VegaVisualisationProps extends Omit<VegaProps, 'renderer'> {
  'aria-label'?: string;
  config?: Config;
}

const defaultConfig = {
  font: 'var(--utrecht-vega-visualization-font-family)',
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
    domainColor: "var(--utrecht-vega-visualization-axis-domain-color, 'black')",
    gridColor: "var(--utrecht-vega-visualization-axis-grid-color, 'gray')",
    tickColor: "var(--utrecht-vega-visualization-axis-tick-color, 'black')",
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

export const VegaVisualization = ({ actions = false, className, config, ...restProps }: VegaVisualisationProps) => {
  return (
    <div role={'image'} aria-label={restProps['aria-label']}>
      <div aria-hidden={true}>
        <Vega
          {...restProps}
          actions={actions}
          renderer={'svg'}
          className={clsx('utrecht-vega-visualisation', className)}
          config={{ ...defaultConfig, ...config }}
        />
      </div>
    </div>
  );
};
