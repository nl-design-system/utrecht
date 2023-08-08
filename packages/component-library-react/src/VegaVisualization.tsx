import clsx from 'clsx';
import { Vega } from 'react-vega';
import { VegaProps } from 'react-vega/lib/Vega';
import { Config } from 'vega';

export interface VegaVisualisationProps extends VegaProps {
  config?: Config;
}

const defaultConfig = {
  font: 'var(--utrecht-vega-visualisation-font-family)',
  title: {
    fontSize: 20,
    anchor: 'start',
    offset: 32,
    subtitleFontSize: 16,
  },
  axis: {
    labelFontSize: 16,
    titleFontSize: 16,
    labelFontWeight: 'bold',
    titleFontWeight: 'normal',
    labelAngle: 0,
    ticks: false,
    labelPadding: 12,
    domainColor: 'black',
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
  padding: { left: 20, top: 20, right: 20, bottom: 20 },
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

export const VegaVisualization = ({ className, config, ...restProps }: VegaVisualisationProps) => {
  return (
    <Vega
      {...restProps}
      renderer={'svg'}
      className={clsx('utrecht-vega-visualisation', className)}
      config={{ ...defaultConfig, ...config }}
    />
  );
};
