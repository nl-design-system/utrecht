/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { IconArrowsSort, IconLock, IconSortAscending, IconSortDescending } from '@tabler/icons-react';
import {
  Alert,
  Article,
  Button,
  ButtonGroup,
  ButtonLink,
  Checkbox,
  Code,
  ColorSample,
  CurrencyData,
  FormLabel,
  Heading,
  IBANData,
  Icon,
  Link,
  OrderedList,
  OrderedListItem,
  Paragraph,
  RadioButton,
  StatusBadge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Textbox,
  UnorderedList,
  UnorderedListItem,
  URLValue,
} from '@utrecht/component-library-react';
import readme from '@utrecht/components/table/README.md?raw';
import actionReadme from '@utrecht/components/table/_table-row-action.md?raw';
import tokensDefinition from '@utrecht/components/table/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import groupBy from 'lodash.groupby';
import React, { createRef, PropsWithChildren, ReactNode, useId, useState } from 'react';
import { designTokenStory } from './design-token-story';
import { ExampleDateValue } from './util/ExampleDateValue';
import { ExampleDialog } from './util/ExampleDialog';
import { ExampleFullscreenDocument } from './util/ExampleFullscreenDocument';
import { ExampleInvisibleText } from './util/ExampleInvisibleText';
import { ExampleMarkMatches } from './util/ExampleMarkMatches';
import { ExampleTimeDuration } from './util/ExampleTimeDuration';
import { useFullscreenButton } from './util/useFullscreenButton';
import '@utrecht/components/table/css/index.scss';

const meta = {
  title: 'CSS Component/Table',
  id: 'css-table',
  component: Table,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-table',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer data</TableCell>
            <TableCell>Footer data</TableCell>
            <TableCell>Footer data</TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: false },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableCellEmpty: Story = {
  name: 'Table with only empty cells',
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col" sticky></TableHeaderCell>
            <TableHeaderCell scope="col" sticky></TableHeaderCell>
            <TableHeaderCell scope="col" sticky></TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row"></TableHeaderCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Gebruik voor lege cellen niet \`&nbsp;\` om een minimum-afmeting te krijgen. Gebruik de \`utrecht.table.cell.line-height\` design token, die wordt ook gebruikt voor de minimale \`block-size\`.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableRowPresentation: Story = {
  name: 'Table row that is presentation only',
  args: {
    children: (
      <>
        <TableCaption>
          Tabel 3 Budgettaire gevolgen van beleid art. 2 Functionele uitgaven van de Koning (bedragen x € 1.000)
        </TableCaption>
        <TableHeader>
          {/* Interesting! This header cell must be sticky, otherswise the "2021" will visually become the columm header
        for the first column of the table body */}
          <TableHeaderCell scope="col" sticky></TableHeaderCell>
          <TableHeaderCell scope="col" numericColumn>
            2021
          </TableHeaderCell>
          <TableHeaderCell scope="col" numericColumn>
            2022
          </TableHeaderCell>
          <TableHeaderCell scope="col" numericColumn>
            2023
          </TableHeaderCell>
          <TableHeaderCell scope="col" numericColumn>
            2024
          </TableHeaderCell>
          <TableHeaderCell scope="col" numericColumn>
            2025
          </TableHeaderCell>
          <TableHeaderCell scope="col" numericColumn>
            2026
          </TableHeaderCell>
          <TableHeaderCell scope="col" numericColumn>
            2027
          </TableHeaderCell>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row" sticky>
              Verplichtingen
            </TableHeaderCell>
            <TableCell numericColumn>31.167</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
          </TableRow>
          <TableRow aria-hidden="true">
            <TableHeaderCell scope="row" sticky></TableHeaderCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row" sticky>
              Uitgaven
            </TableHeaderCell>
            <TableCell numericColumn>31.167</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
          </TableRow>
          <TableRow aria-hidden="true">
            <TableHeaderCell scope="row" sticky></TableHeaderCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row" sticky>
              Institutionele Inrichting
            </TableHeaderCell>
            <TableCell numericColumn>31.167</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
          </TableRow>
          <TableRow aria-hidden="true">
            <TableHeaderCell scope="row" sticky></TableHeaderCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row" sticky>
              Ontvangsten
            </TableHeaderCell>
            <TableCell numericColumn>0</TableCell>
            <TableCell numericColumn>0</TableCell>
            <TableCell numericColumn>0</TableCell>
            <TableCell numericColumn>0</TableCell>
            <TableCell numericColumn>0</TableCell>
            <TableCell numericColumn>0</TableCell>
            <TableCell numericColumn>0</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Gebruik \`aria-hidden="true"\` voor lege tabelrijen, die alleen bedoeld zijn voor visuele witruimte. Screen reader gebruikers kunnen zo in één keer de lege rij overslaan, waardoor het minder tijd kost informatie te vinden.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export const TableDataDuration: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Loket</TableHeaderCell>
            <TableHeaderCell scope="col">Wachttijd</TableHeaderCell>
            <TableHeaderCell scope="col">Aantal personen voor je</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Stadskantoor</TableHeaderCell>
            <TableCell>4 minuten</TableCell>
            <TableCell>1 persoon</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Wijkservicecentrum</TableHeaderCell>
            <TableCell>Geen</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Tijden hebben nummers, maar een tijd wordt **niet** rechts uitgelijnd.

Gebruik niet "0 minuten", maar kies een passende omschrijving.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  render: (({ children }: PropsWithChildren) => (
    <>
      <Table aria-describedby="074f045c-a6f3-4792-8529-31a8f684e956">{children}</Table>
      <Paragraph id="074f045c-a6f3-4792-8529-31a8f684e956">Laatste update: 1 minuut geleden (om 9.42 uur)</Paragraph>
    </>
  )) as any,
};

export const TableTimePeriod: Story = {
  args: {
    children: (
      <>
        <TableCaption>Openingstijden Stadskantoor</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Dag</TableHeaderCell>
            <TableHeaderCell scope="col">Geopend</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">maandag</TableHeaderCell>
            <TableCell>8.00 – 17.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">dinsdag</TableHeaderCell>
            <TableCell>8.00 – 20.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">woensdag</TableHeaderCell>
            <TableCell>8.00 – 17.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">donderdag</TableHeaderCell>
            <TableCell>8.00 – 20.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">vrijdag</TableHeaderCell>
            <TableCell>8.00 – 17.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">zaterdag</TableHeaderCell>
            <TableCell>Gesloten</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">zondag</TableHeaderCell>
            <TableCell>Gesloten</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Tijden hebben nummers, maar een tijd wordt **niet** rechts uitgelijnd.

Gebruik niet "0 minuten", maar kies een passende omschrijving.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableTimePeriodWeek: Story = {
  args: {
    headingLevel: 1,
    labelId: '4e6522bb-6239-47e9-9543-f298ffd5d8a2',
    descriptionId: '2a186e0c-8eb2-4ae6-b30c-111f64dd875e',
    locale: 'nl-NL',
    data: [
      {
        location: 'zwembad De Kwakel',
        title: 'Aquajoggen',
        startTime: '2023-06-13T09:00+02:00',
        endTime: '2023-06-13T09:45+02:00',
      },
    ],
  },
  render: ({
    descriptionId,
    headingLevel,
    labelId,
    locale,
  }: PropsWithChildren<{
    locale?: string;
    data: {
      headingLevel: number;
      descriptionId: string;
      labelId: string;
      location: string;
      title: string;
      startTime: string;
      endTime: string;
    }[];
  }>) => (
    <>
      <Heading id={labelId} level={headingLevel}>
        Rooster en openingstijden zwembad De Kwakel
      </Heading>
      <div id={descriptionId}>
        <Paragraph>
          U kunt hier zien wat u bij zwembad Den Hommel kunt doen en op welke tijden de activiteiten zijn.
        </Paragraph>
        <Alert type="warning">
          <Heading level={headingLevel + 1}>Vandaag gaan 2 activiteiten niet door bij Den Hommel</Heading>
          <Paragraph>Door tekort aan personeel gaan vandaag, 13 juni, gaan deze 2 activiteiten niet door:</Paragraph>
          <UnorderedList>
            <UnorderedListItem>07.00 - 8.00 uur: warmwaterzwemmen</UnorderedListItem>
            <UnorderedListItem>21.00 - 22.00 uur: banenzwemmen</UnorderedListItem>
          </UnorderedList>
        </Alert>
      </div>
      <Table aria-labelledby={labelId} aria-describedby={descriptionId}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col"></TableHeaderCell>
            {['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'].map((day, index) => (
              <TableHeaderCell scope="col" key={index} aria-current={day === 'dinsdag' ? 'date' : undefined}>
                {day}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="col" colSpan={8}>
              Aquajoggen
            </TableHeaderCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Even weken</TableHeaderCell>
            <TableCell></TableCell>
            <TableCell>
              <ExampleTimeDuration
                startTime="2023-06-13T09:00+02:00"
                endTime="2023-06-13T09:45+02:00"
                locale={locale}
              />
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Iedere week</TableHeaderCell>
            <TableCell />
            <TableCell>
              <ExampleTimeDuration
                startTime="2023-06-12T20:30+02:00"
                endTime="2023-06-12T21:15+02:00"
                locale={locale}
              />
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell>
              <ExampleTimeDuration
                startTime="2023-06-12T09:45+02:00"
                endTime="2023-06-12T10:30+02:00"
                locale={locale}
              />
            </TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="col" colSpan={8}>
              Aqua bodycare
            </TableHeaderCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row"></TableHeaderCell>
            <TableCell>
              <ExampleTimeDuration
                startTime="2023-06-12T11:00+02:00"
                endTime="2023-06-12T11:45+02:00"
                locale={locale}
              />
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Iedere week</TableHeaderCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">dinsdag</TableHeaderCell>
            <TableCell>8.00 – 20.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">woensdag</TableHeaderCell>
            <TableCell>8.00 – 17.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">donderdag</TableHeaderCell>
            <TableCell>8.00 – 20.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">vrijdag</TableHeaderCell>
            <TableCell>8.00 – 17.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">zaterdag</TableHeaderCell>
            <TableCell>Gesloten</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">zondag</TableHeaderCell>
            <TableCell>Gesloten</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: `Tijden hebben nummers, maar een tijd wordt **niet** rechts uitgelijnd.

Gebruik niet "0 minuten", maar kies een passende omschrijving.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableFinancial: Story = {
  args: {
    children: (
      <>
        <TableCaption>Transacties</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Datum</TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Bij
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Af
            </TableHeaderCell>
            <TableHeaderCell scope="col">Tegenrekening</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            {
              date: '2000-01-01T00:00:00',
              account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
              currency: 'EUR',
              amount: '42.42',
              credit: false,
            },
            {
              date: '2003-01-01T00:00:00',
              account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
              currency: 'EUR',
              amount: '-42.42',
              credit: false,
            },
            {
              date: '2006-01-01T00:00:00',
              account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
              currency: 'EUR',
              amount: '-1212121',
              credit: false,
            },
          ].map(({ date, currency, amount, account }) => (
            <TableRow>
              <TableCell>
                <ExampleDateValue locale="nl-NL" dateTime={date} />
              </TableCell>
              <TableCell numericColumn>
                {parseFloat(amount) >= 0 ? <CurrencyData locale="nl-NL" currency={currency} amount={amount} /> : null}
              </TableCell>
              <TableCell numericColumn>
                {parseFloat(amount) < 0 ? (
                  <CurrencyData locale="nl-NL" currency={currency} amount={Math.abs(parseFloat(amount))} />
                ) : null}
              </TableCell>
              <TableCell>
                <IBANData value={account} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Tijden hebben nummers, maar een tijd wordt **niet** rechts uitgelijnd.

Gebruik niet "0 minuten", maar kies een passende omschrijving.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

const arabicDecorator = (Story) => (
  <div dir="rtl" lang="ar">
    {Story()}
  </div>
);

export const TableRTL: Story = {
  name: 'Table (right-to-left script)',
  args: {
    children: (
      <>
        <TableCaption>Transacties</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Datum</TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Bij
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Af
            </TableHeaderCell>
            <TableHeaderCell scope="col">Tegenrekening</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            {
              date: '2000-01-01T00:00:00',
              account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
              currency: 'EUR',
              amount: '42.42',
              credit: false,
            },
            {
              date: '2003-01-01T00:00:00',
              account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
              currency: 'EUR',
              amount: '-42.42',
              credit: false,
            },
            {
              date: '2006-01-01T00:00:00',
              account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
              currency: 'EUR',
              amount: '-1212121',
              credit: false,
            },
          ].map(({ date, currency, amount, account }) => (
            <TableRow>
              <TableCell>
                <ExampleDateValue locale="ar" dateTime={date} />
              </TableCell>
              <TableCell numericColumn>
                {parseFloat(amount) >= 0 ? <CurrencyData locale="ar" currency={currency} amount={amount} /> : null}
              </TableCell>
              <TableCell numericColumn>
                {parseFloat(amount) < 0 ? (
                  <CurrencyData locale="ar" currency={currency} amount={Math.abs(parseFloat(amount))} />
                ) : null}
              </TableCell>
              <TableCell>
                <IBANData value={account} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
  decorators: [arabicDecorator],
  parameters: {
    docs: {
      description: {
        story: `Tijden hebben nummers, maar een tijd wordt **niet** rechts uitgelijnd.

Gebruik niet "0 minuten", maar kies een passende omschrijving.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

const getMonth = (isoDate: string): string => isoDate.replace(/(^\d+-\d+).+/, '$1');

export const TableSubHeadings: Story = {
  name: 'Table with subheadings',
  args: {
    items: [
      {
        date: '2000-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '42.42',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-1.50',
        credit: false,
      },
      {
        date: '2003-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '-42.42',
        credit: false,
      },
      {
        date: '2006-01-01T00:00:00',
        account: 'mu43 BOMM 0101 1234 5678 9101 000-MUR',
        currency: 'EUR',
        amount: '1212121',
        credit: false,
      },
    ],
    sticky: false,
  },
  render: ({
    items,
    sticky,
  }: PropsWithChildren<{
    items: { date: string; account: string; currency: string; credit: boolean; sticky: string }[];
  }>) => (
    <>
      <TableCaption>Transacties</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Datum</TableHeaderCell>
          <TableHeaderCell scope="col" numericColumn>
            Bij
          </TableHeaderCell>
          <TableHeaderCell scope="col" numericColumn>
            Af
          </TableHeaderCell>
          <TableHeaderCell scope="col">Tegenrekening</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.values(groupBy(items, ({ date }) => getMonth(date))).map((items) => (
          <>
            <TableRow>
              <TableHeaderCell scope="col" colSpan={4} sticky={sticky}>
                {new Intl.DateTimeFormat('nl-NL', {
                  year: 'numeric',
                  month: 'long',
                }).format(new Date(items[0].date))}
              </TableHeaderCell>
            </TableRow>
            {items.map(({ date, currency, amount, account }) => (
              <TableRow>
                <TableHeaderCell scope="row">
                  <ExampleDateValue locale="nl-NL" dateTime={date} />
                </TableHeaderCell>
                {/* <TableCell>
                  <ExampleDateValue locale="nl-NL" dateTime={date} />
                </TableCell> */}
                <TableCell numericColumn>
                  {parseFloat(amount) >= 0 ? <CurrencyData locale="nl-NL" currency={currency} amount={amount} /> : null}
                </TableCell>
                <TableCell numericColumn>
                  {parseFloat(amount) < 0 ? (
                    <CurrencyData locale="nl-NL" currency={currency} amount={Math.abs(parseFloat(amount))} />
                  ) : null}
                </TableCell>
                <TableCell>
                  <IBANData value={account} />
                </TableCell>
              </TableRow>
            ))}
          </>
        ))}
      </TableBody>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: `Tijden hebben nummers, maar een tijd wordt **niet** rechts uitgelijnd.

Gebruik niet "0 minuten", maar kies een passende omschrijving.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableSubHeadingsSticky: Story = {
  name: 'Table with sticky subheadings',
  ...TableSubHeadings,
  args: {
    ...TableSubHeadings.args,
    sticky: true,
  },
};

export const TableHeaderHidden: Story = {
  args: {
    children: (
      <>
        <TableCaption>Openingstijden Stadskantoor</TableCaption>
        <TableHeader className="utrecht-table__header--hidden">
          <TableRow>
            <TableHeaderCell scope="col">Dag</TableHeaderCell>
            <TableHeaderCell scope="col">Geopend</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">maandag</TableHeaderCell>
            <TableCell>8.00 – 17.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">dinsdag</TableHeaderCell>
            <TableCell>8.00 – 20.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">woensdag</TableHeaderCell>
            <TableCell>8.00 – 17.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">donderdag</TableHeaderCell>
            <TableCell>8.00 – 20.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">vrijdag</TableHeaderCell>
            <TableCell>8.00 – 17.00 uur</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">zaterdag</TableHeaderCell>
            <TableCell>Gesloten</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">zondag</TableHeaderCell>
            <TableCell>Gesloten</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Soms is de tabel erg simpel en lijkt de heading niet nodig.

Gebruik dan een hidden heading, zodat de cellen wel een goed label hebben. Test een tabel met een verborgen heading met _screen reader_ gebruikers.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

const TableCellData = ({ children, truncate }: PropsWithChildren<{ truncate?: boolean }>) => (
  <span
    className={clsx('utrecht-table__data', {
      'utrecht-table__data--truncate': truncate,
    })}
  >
    {children}
  </span>
);

export const TableRowAlternateColor: Story = {
  args: {
    rowCount: 10,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  render: ({ rowCount }: PropsWithChildren<{ rowCount: number }>) => (
    <Table className="utrecht-table--alternate-row-color">
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Column A</TableHeaderCell>
          <TableHeaderCell scope="col">Column B</TableHeaderCell>
          <TableHeaderCell scope="col">Column C</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array(rowCount)
          .fill(null)
          .map((_, index) => (
            <TableRow>
              <TableHeaderCell scope="row">Row {index + 1}</TableHeaderCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  ),
};

export const TableRowHover: Story = {
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  render: () => (
    <Table className="utrecht-table--row-hover">
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Column A</TableHeaderCell>
          <TableHeaderCell scope="col">Column B</TableHeaderCell>
          <TableHeaderCell scope="col">Column C</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <TableRow>
              <TableHeaderCell scope="row">Row {index + 1}</TableHeaderCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  ),
};

export const TableRowFocusWithin: Story = {
  args: {},
  render: () => (
    <Table className="utrecht-table--row-focus-within">
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">
            <Button appearance="subtle" className="utrecht-table__header-cell-button">
              <Icon>
                <IconArrowsSort />
              </Icon>
              Column A
            </Button>
          </TableHeaderCell>
          <TableHeaderCell scope="col">
            <Button appearance="subtle" className="utrecht-table__header-cell-button">
              <Icon>
                <IconArrowsSort />
              </Icon>
              Column B
            </Button>
          </TableHeaderCell>
          <TableHeaderCell scope="col">
            <Button appearance="subtle" className="utrecht-table__header-cell-button">
              <Icon>
                <IconArrowsSort />
              </Icon>
              Column C
            </Button>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array(10)
          .fill(null)
          .map(() => useId())
          .map((id, index) => (
            <TableRow>
              <TableHeaderCell scope="row" id={id}>
                Row {index + 1}
              </TableHeaderCell>
              <TableCell>Data</TableCell>
              <TableCell>
                <Button aria-labelledby={id}>Some Action</Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: `In sommige situaties is het handig goed te zien in welke _table row_ de focus is. Gebruik dan de \`utrecht-table--row-focus-within\` class name.

Je kunt ook de SCSS mixin gebruiken, om een het effect te gebruiken voor een bepaalde eigen situatie. Bijvoorbeeld, wanneer je "focus-within" wel wilt gebruiken bij focus op de _primary action button_, maar niet wanneer andere buttons focus hebben.

De stijl is alleen bedoeld voor tabelrijen met data, in de _table body_. Het effect werkt niet voor rows in de _table header_ of de _table footer_.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export const TableRichText: Story = {
  name: 'Tabel with rich text',
  args: {},
  render: () => (
    <Table
      style={{
        '--utrecht-ordered-list-margin-block-start': 0,
        '--utrecht-unordered-list-margin-block-start': 0,
        '--utrecht-unordered-list-item-margin-block-start': 0,
        '--utrecht-paragraph-list-margin-block-start': 0,
      }}
    >
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Component</TableHeaderCell>
          <TableHeaderCell scope="col">Column B</TableHeaderCell>
          <TableHeaderCell scope="col">Column C</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHeaderCell scope="row">Unordered list (only child)</TableHeaderCell>
          <TableCell>Data</TableCell>
          <TableCell>
            <UnorderedList>
              <UnorderedListItem>Data</UnorderedListItem>
              <UnorderedListItem>Data</UnorderedListItem>
              <UnorderedListItem>Data</UnorderedListItem>
            </UnorderedList>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope="row">Unordered list (first child)</TableHeaderCell>
          <TableCell>Data</TableCell>
          <TableCell>
            <UnorderedList>
              <UnorderedListItem>Data</UnorderedListItem>
              <UnorderedListItem>Data</UnorderedListItem>
              <UnorderedListItem>Data</UnorderedListItem>
            </UnorderedList>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Paragraph>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope="row">Unordered list (last child</TableHeaderCell>
          <TableCell>Data</TableCell>
          <TableCell>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Paragraph>
            <UnorderedList>
              <UnorderedListItem>Data</UnorderedListItem>
              <UnorderedListItem>Data</UnorderedListItem>
              <UnorderedListItem>Data</UnorderedListItem>
            </UnorderedList>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope="row">Ordered list (only child)</TableHeaderCell>
          <TableCell>Data</TableCell>
          <TableCell>
            <OrderedList>
              <OrderedListItem>Data</OrderedListItem>
              <OrderedListItem>Data</OrderedListItem>
              <OrderedListItem>Data</OrderedListItem>
            </OrderedList>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope="row">Ordered list (first child)</TableHeaderCell>
          <TableCell>Data</TableCell>
          <TableCell>
            <OrderedList>
              <OrderedListItem>Data</OrderedListItem>
              <OrderedListItem>Data</OrderedListItem>
              <OrderedListItem>Data</OrderedListItem>
            </OrderedList>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Paragraph>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope="row">Ordered list (last child)</TableHeaderCell>
          <TableCell>Data</TableCell>
          <TableCell>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Paragraph>
            <OrderedList>
              <OrderedListItem>Data</OrderedListItem>
              <OrderedListItem>Data</OrderedListItem>
              <OrderedListItem>Data</OrderedListItem>
            </OrderedList>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope="row">Paragraph</TableHeaderCell>
          <TableCell>Data</TableCell>
          <TableCell>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: `De eerste regels van een gewone tabelcel en cellen met een _unordered list_, _ordered list_ of _paragraph_ moeten op gelijke hoogte staan. De \`margin-block-start\` kan er voor zorgen dat de uitlijning niet overeenkomt.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableFootnote: Story = {
  name: 'Tabel with footnote',
  args: {},
  render: () => (
    <div>
      <Table>
        <TableCaption>
          Verandering opgesteld vermogen zonnepanelen
          <sup className="example-footnote">
            <Link href="#voetnoot-1">(voetnoot 1)</Link>
          </sup>
          , 2022 t.o.v. 2021
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col"></TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Totaal (MW)
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Bedrijven (MW)
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Woningen (MW)
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Utrecht</TableHeaderCell>
            <TableCell numericColumn>30,5</TableCell>
            <TableCell numericColumn>2,9</TableCell>
            <TableCell numericColumn>27,61</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Gemeente X</TableHeaderCell>
            <TableCell numericColumn>…</TableCell>
            <TableCell numericColumn>…</TableCell>
            <TableCell numericColumn>…</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <dl>
        <div id="voetnoot-1">
          <dt>voetnoot 1</dt>
          <dd>
            In 2022 is er een gemeentelijke herindeling geweest, hier wordt de indeling van 2022 gebruikt (zie
            Gemeentelijke indeling op 1 januari 2022 (cbs.nl)). Zonnestroomcijfers van opgeheven gemeenten uit 2021 zijn
            volgens de nieuwe indeling bij elkaar opgeteld.
          </dd>
        </div>
      </dl>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Een verwijzing naar een voetnoet in een tekst kan onduidelijk en moeilijk te gebruiken zijn. De \`font-size\` van een voetnoot is vaak kleiner dan omliggende tekst, daarom is een voetnoot soms niet groot genoeg. Als de voetnoot-verwijzing een link is, dan kan die te klein zijn om aan te klikken.  

Zorg dat voetnoot links minimaal 24x24 pixels groot zijn (WCAG 2.2 eis 2.5.8), bijvoorbeeld door niet alleen "1" te gebruiken als tekst, maar "voetnoot 1".

Gebruik minimaal 16px als \`font-size\` van de tekst, ook voor de tekst in een \`<sup>\` element.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableMarkData: Story = {
  args: {
    match: 'data',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  render: ({ match }: PropsWithChildren<{ match: string }>) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Column A</TableHeaderCell>
          <TableHeaderCell scope="col">Column B</TableHeaderCell>
          <TableHeaderCell scope="col">Column C</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHeaderCell scope="row">
            <ExampleMarkMatches match={match}>Item 1</ExampleMarkMatches>
          </TableHeaderCell>
          <TableCell>
            <ExampleMarkMatches match={match}>Data</ExampleMarkMatches>
          </TableCell>
          <TableCell>
            <ExampleMarkMatches match={match}>More data</ExampleMarkMatches>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <ExampleMarkMatches match={match}>More data</ExampleMarkMatches>
          </TableCell>
          <TableCell>
            <ExampleMarkMatches match={match}>More data</ExampleMarkMatches>
          </TableCell>
          <TableCell>
            <ExampleMarkMatches match={match}>More data</ExampleMarkMatches>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const TableMarkDataOverflow: Story = {
  args: {
    match: 'dolor',
  },
  render: (({ match }: PropsWithChildren<{ match: string }>) => (
    <Article>
      <Table style={{ tableLayout: 'fixed' }}>
        <TableCaption>
          Zoeken op: <strong>{match}</strong>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col" style={{ width: '40ch' }}>
              Column C
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">
              <ExampleMarkMatches match={match}>Item 1</ExampleMarkMatches>
            </TableHeaderCell>
            <TableCell>
              <ExampleMarkMatches match={match}>Data</ExampleMarkMatches>
            </TableCell>
            <TableCell style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              <ExampleMarkMatches match={match}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </ExampleMarkMatches>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <ExampleMarkMatches match={match}>More data</ExampleMarkMatches>
            </TableCell>
            <TableCell>
              <ExampleMarkMatches match={match}>More data</ExampleMarkMatches>
            </TableCell>
            <TableCell style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              <ExampleMarkMatches match={match}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </ExampleMarkMatches>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Article>
  )) as any,
  parameters: {
    docs: {
      description: {
        story: `Help wanted: hoe maken we duidelijk dat er highlights zijn in een cel, wanneer de gemarkeerde tekst niet zichtbaar is? Moet er een \`highlight-within\` variant komen van een tabel-cel en de tabel-rij, vergelijkbaar met \`focus-within\`?`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableURLValue: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Jane</TableCell>
            <TableCell>Doe</TableCell>
            <TableCell>
              <Link href="mailto:jane+file-under-very-very-very-very-very-very-very-long-inbox@example.com">
                <TableCellData truncate>
                  <URLValue>jane+file-under-very-very-very-very-very-very-very-long-inbox@example.com</URLValue>
                </TableCellData>
              </Link>
            </TableCell>
            <TableCell>
              <Link href="https://very-very-very-very-very-very-very-long-subdomain.example.com/jane">
                <URLValue>https://very-very-very-very-very-very-very-long-subdomain.example.com/jane</URLValue>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Joe</TableCell>
            <TableCell>Doe</TableCell>
            <TableCell style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              <Link href="mailto:joe+file-under-very-very-very-very-very-very-very-long-inbox@example.com">
                <URLValue>joe+file-under-very-very-very-very-very-very-very-long-inbox@example.com</URLValue>
              </Link>
            </TableCell>
            <TableCell style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              <Link href="https://very-very-very-very-very-very-very-long-subdomain.example.com/joe">
                <URLValue>https://very-very-very-very-very-very-very-long-subdomain.example.com/joe</URLValue>
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  render: (({ children }: PropsWithChildren<{ descriptionId: string }>) => (
    <Article>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
      <div className="utrecht-table__container">
        <Table>{children}</Table>
      </div>
    </Article>
  )) as any,
};

export const TableMultilineValue: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Gemeente</TableHeaderCell>
            <TableHeaderCell scope="col">Bezoekadres</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="col">Gemeente Amsterdam</TableHeaderCell>
            <TableCell>
              Stadsloket Centrum
              <br />
              Amstel 1<br />
              1011 PN Amsterdam
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="col">Gemeente Den Haag</TableHeaderCell>
            <TableCell>
              Stadhuis Den Haag
              <br />
              Spui 70
              <br />
              2511 BT Den Haag
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="col">Gemeente Rotterdam</TableHeaderCell>
            <TableCell>
              Stadhuis Rotterdam
              <br />
              Coolsingel 40
              <br />
              3011 AD Rotterdam
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="col">Gemeente Utrecht</TableHeaderCell>
            <TableCell>
              Stadskantoor
              <br />
              Stadsplateau 1<br />
              3521 AZ Utrecht
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Sommige soorten data zijn moeten op meerdere regels staan om duidelijk te zijn, zoals bijvoorbeeld een adres.

De visuele hierarchie moet duidelijk zijn. De tekst van de _row header_ moet niet lager staan dan de tekst van de cellen ernaast. Gebruik \`vertical-align: top\` voor een duidelijke visuele hierarchie.         `,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableFixedLayoutValues: Story = {
  args: {
    editable: false,
    fixed: true,
    oneLine: true,
    columns: [
      {
        label: 'Voornaam',
        type: 'given-name',
        inlineSize: '20ch',
        values: ['Bobby', 'Jane', 'Jean-Baptiste'],
        translate: false,
      },
      {
        label: 'Achternaam',
        type: 'family-name',
        inlineSize: '20ch',
        values: ['Tables', 'Doe', "de Preud'homme d'Hailly de Nieuport"],
        translate: false,
      },
      {
        label: 'Telefoonnummer',
        type: 'tel',
        inlineSize: '20ch',
        values: ['+31 30 123 4567', '+31 30 286 00 00'],
        translate: false,
      },
      {
        label: 'Telefoonnummer',
        type: 'tel-national',
        inlineSize: 'calc(13 * (0.6667em + 0.33334ch))',
        values: ['030 123 4567', '14 030'],
        translate: false,
      },
      {
        label: 'Straatnaam',
        type: '',
        inlineSize: '20ch',
        values: ['Laan van Meerdervoort', 'Teut', 'Amersfoortsweg'],
        translate: false,
      },
      {
        label: 'Huisnummer',
        type: '',
        inlineSize: '5ch',
        values: ['2024', '110-3V', '7'],
        translate: false,
      },
      {
        label: 'Postcode',
        type: 'postal-code',
        inlineSize: '7ch',
        values: ['1010 AB'],
        translate: false,
      },
      {
        label: 'Website',
        type: 'url',
        inlineSize: '20ch',
        values: ['http://example.com/'],
        translate: false,
      },
      {
        label: 'E-mailadres',
        type: 'url',
        inlineSize: '20ch',
        values: ['info@example.com'],
        translate: false,
      },
    ],
  },
  render: (({
    columns,
    editable,
    fixed,
    oneLine,
  }: PropsWithChildren<{
    columns: { label: string; type: string; inlineSize: string; values: string[]; translate?: boolean }[];
    editable?: boolean;
    empty?: boolean;
    fixed?: boolean;
    oneLine?: boolean;
  }>) => {
    const rowCount = columns.reduce((maxValueCount, column) => Math.max(maxValueCount, column.values?.length || 0), 0);

    return (
      <Table className={clsx({ 'utrecht-table--fixed': fixed, 'utrecht-table--oneline': oneLine })}>
        <TableHeader>
          <TableRow>
            {columns.map(({ inlineSize, label }) => (
              <TableHeaderCell
                scope="col"
                style={{
                  inlineSize,
                }}
              >
                {label}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(rowCount)
            .fill(0)
            .map((_, index) => (
              <TableRow key={index}>
                {columns.map(({ translate, values }) => {
                  const value = Array.isArray(values) && values.length >= index ? values[index] : '';
                  return (
                    <TableCell
                      translate={translate === false ? 'no' : undefined}
                      style={editable ? { padding: 0 } : undefined}
                    >
                      {editable ? <Textbox value={value} style={{ inlineSize: '100%' }} /> : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    );
  }) as any,
  parameters: {
    docs: {
      description: {
        story: `In een fixed layout moet je kiezen hoe breed elke kolom is. Voor veel soorten data hebben we goede eerste keus voor de breedte van de kolom.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableFixedLayoutValuesEditable: Story = {
  ...TableFixedLayoutValues,
  args: {
    ...TableFixedLayoutValues.args,
    editable: true,
  },
};

export const TableHeaderSticky: Story = {
  args: {
    children: (
      <>
        <TableHeader sticky>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(42)
            .fill(42)
            .map((_, index) => (
              <TableRow key={index}>
                <TableHeaderCell scope="row">Item {index + 1}</TableHeaderCell>
                <TableCell>Data</TableCell>
                <TableCell>More data</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `A sticky table heading must have a color and background color, otherwise the heading will overlap the table body and both become unreadable..`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableFooterSticky: Story = {
  args: {
    children: (
      <>
        <TableHeader sticky>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(42)
            .fill(42)
            .map((_, index) => (
              <TableRow key={index}>
                <TableHeaderCell scope="row">Item {index + 1}</TableHeaderCell>
                <TableCell>Data</TableCell>
                <TableCell>More data</TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter sticky>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Like the sticky header, a sticky footer must have background-color and color defined. Without the colors the content will be unreadable.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableHeaderCellSticky: Story = {
  args: {
    children: (
      <>
        <TableHeader sticky>
          <TableRow>
            <TableHeaderCell scope="col" sticky>
              Column A
            </TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Column C
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(42)
            .fill(42)
            .map((_, index) => (
              <TableRow key={index}>
                <TableHeaderCell scope="row" sticky>
                  Item {index + 1}
                </TableHeaderCell>
                <TableCell>
                  <nobr>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </nobr>
                </TableCell>
                <TableCell numericColumn>1</TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter sticky>
          <TableRow>
            <TableHeaderCell scope="col" sticky>
              Totaal
            </TableHeaderCell>
            <TableCell></TableCell>
            <TableCell scope="col" numericColumn>
              42
            </TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `When the page is viewed at 400% zoom, the sticky heading cells might not leave enough room after the cell to view the table data. This can lead to the page not being accessible. Please use with care, and test your table with 400% zoom. `,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const FigureCaption: Story = {
  args: {
    descriptionId: '10acbe03-e737-494f-8f17-39c14132b9c1',
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>More data</TableCell>
            <TableCell>More data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  render: (({ descriptionId, children }: PropsWithChildren<{ descriptionId: string }>) => (
    <figure>
      <Table aria-describedby={descriptionId}>{children}</Table>
      <figcaption id={descriptionId}>Bron: Gemeente Utrecht</figcaption>
    </figure>
  )) as any,
};

export const TableBodyEmpty: Story = {
  name: 'Table with empty table body',
  args: {
    descriptionId: '90c0a4db-3fa2-4c09-9693-e8c8f1f37413',
    children: <></>,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  render: (({ descriptionId }: PropsWithChildren<{ descriptionId: string }>) => (
    <Table aria-describedby={descriptionId}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Column A</TableHeaderCell>
          <TableHeaderCell scope="col">Column B</TableHeaderCell>
          <TableHeaderCell scope="col">Column C</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3}>
            <Paragraph id={descriptionId}>Geen resultaten gevonden.</Paragraph>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )) as any,
};

export const HeadingLabel: Story = {
  args: {
    heading: 'Uitslag internetpeiling 8 juni tot en met 28 juni',
    headingLevel: 1,
    labelId: '8724030c-19d3-4e25-8c61-fe42c71e6890',
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  render: (({
    heading,
    headingLevel,
    labelId,
    children,
  }: PropsWithChildren<{ heading: ReactNode; headingLevel: number; labelId: string }>) => (
    <div>
      <Heading id={labelId} level={headingLevel}>
        {heading}
      </Heading>
      <Table aria-labelledby={labelId}>{children}</Table>
    </div>
  )) as any,
};

export const HeadingLabelAndDescription: Story = {
  args: {
    description: (
      <Paragraph>
        Laatst bijgewerkt op: <time dateTime="2020-06-29">29 juni 2020</time>
      </Paragraph>
    ),
    descriptionId: '5e3dda5e-50cf-456e-bfd7-e1ef16d596a5',
    heading: 'Uitslag internetpeiling 8 juni tot en met 28 juni',
    headingLevel: 1,
    labelId: '37823461-5f19-454d-9099-805b90ccb943',
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Help wanted: We moeten screen reader support voor \`aria-describedby\` op een \`table\` nog uitzoeken. VoiceOver 10 heeft geen aankondiging van \`aria-describedby\`.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  render: (({
    description,
    descriptionId,
    heading,
    headingLevel,
    labelId,
    children,
  }: PropsWithChildren<{
    description: ReactNode;
    descriptionId: string;
    heading: string;
    headingLevel: number;
    labelId: string;
  }>) => (
    <div>
      <Heading id={labelId} level={headingLevel}>
        {heading}
      </Heading>
      <div id={descriptionId}>{description}</div>
      <Table aria-labelledby={labelId}>{children}</Table>
    </div>
  )) as any,
};

export const Busy: Story = {
  args: {
    descriptionId: '567300c9-c84c-4cfa-aa6f-e400989ee8d6',
    children: <></>,
  },
  parameters: {
    docs: {
      description: {
        story: `Help wanted: We moeten screen reader support voor \`aria-live\` op een \`table\` nog uitzoeken. VoiceOver 10 heeft geen aankondiging van \`aria-live\`.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  render: (({ descriptionId }: PropsWithChildren<{ descriptionId: string }>) => (
    <Table aria-describedby={descriptionId} busy>
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Column A</TableHeaderCell>
          <TableHeaderCell scope="col">Column B</TableHeaderCell>
          <TableHeaderCell scope="col">Column C</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3}>
            <Paragraph id={descriptionId}>Bezig met laden.</Paragraph>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )) as any,
};

export const TableRowButton: Story = {
  name: 'Table row with a button',
  args: {
    children: (
      <>
        <TableCaption>Uitslag internetpeiling 8 juni tot en met 28 juni</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Gebied</TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Voor
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Tegen
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Locatie A</TableHeaderCell>
            <TableCell numericColumn>53</TableCell>
            <TableCell numericColumn>113</TableCell>
            <TableCell>
              <Button appearance="subtle-button" aria-label="Locatie A bewerken">
                Bewerken
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie B</TableHeaderCell>
            <TableCell numericColumn>58</TableCell>
            <TableCell numericColumn>42</TableCell>
            <TableCell>
              <Button appearance="subtle-button" aria-label="Locatie B bewerken">
                Bewerken
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie C</TableHeaderCell>
            <TableCell numericColumn>87</TableCell>
            <TableCell numericColumn>16</TableCell>
            <TableCell>
              <Button appearance="subtle-button" aria-label="Locatie C bewerken">
                Bewerken
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: actionReadme,
        // `Gebruik _subtle button_ als je wilt voorkomen dat de tabel visueel te druk is wanneer er veel buttons op het scherm zijn.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableRowButtonGroup: Story = {
  name: 'Table row with a button group',
  args: {
    children: (
      <>
        <TableCaption>Uitslag internetpeiling 8 juni tot en met 28 juni</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Gebied</TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Voor
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Tegen
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Locatie A</TableHeaderCell>
            <TableCell numericColumn>53</TableCell>
            <TableCell numericColumn>113</TableCell>
            <TableCell>
              <ButtonGroup>
                <Button appearance="subtle-button" aria-label="Locatie A bewerken">
                  Bewerken
                </Button>
                <Button appearance="subtle-button" hint="danger" aria-label="Locatie A verwijderen">
                  Verwijderen
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie B</TableHeaderCell>
            <TableCell numericColumn>58</TableCell>
            <TableCell numericColumn>42</TableCell>
            <TableCell>
              <ButtonGroup>
                <Button appearance="subtle-button" aria-label="Locatie B bewerken">
                  Bewerken
                </Button>
                <Button appearance="subtle-button" hint="danger" aria-label="Locatie B verwijderen">
                  Verwijderen
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie C</TableHeaderCell>
            <TableCell numericColumn>87</TableCell>
            <TableCell numericColumn>16</TableCell>
            <TableCell>
              <ButtonGroup>
                <Button appearance="subtle-button" aria-label="Locatie C bewerken">
                  Bewerken
                </Button>
                <Button appearance="subtle-button" hint="danger" aria-label="Locatie C verwijderen">
                  Verwijderen
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Gebruik een _button group_ component als je meerdere buttons bij een tabelrij wilt hebben.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableRowCheckbox: Story = {
  name: 'Table row with a checkbox',
  args: {
    children: (
      <>
        <TableCaption>Bijlages die jij hebt toegevoegd</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Bestand</TableHeaderCell>
            <TableHeaderCell scope="col">Formaat</TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Bestandsgrootte
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            {
              inputId: 'a28a0f41-b105-4891-82e4-10f9cbbc318e',
              inputLabel: '01239f.pdf',
              inputValue: '01239f.pdf',
              size: '0,3 MB',
              sizeValue: 304392,
              type: 'PDF',
            },
            {
              inputId: '59755bbe-de17-41ba-bcab-630906a157f6',
              inputLabel: 'vakantie.jpg',
              inputValue: 'vakantie.jpg',
              size: '2,4 MB',
              sizeValue: 2416582,
              type: 'PDF',
            },
            {
              inputId: 'efb4a150-59a2-49af-b7b7-9786a16e34e7',
              inputLabel: 'archief.zip',
              inputValue: 'archief.zip',
              size: '5,8 MB',
              sizeValue: 5799796,
              type: 'ZIP',
            },
          ].map(({ inputId, inputLabel, inputValue, size, sizeValue, type }) => {
            return (
              <TableRow>
                <TableHeaderCell scope="row">
                  <FormLabel htmlFor={inputId} type="checkbox">
                    <Checkbox id={inputId} value={inputValue} /> <URLValue>{inputLabel}</URLValue>
                  </FormLabel>
                </TableHeaderCell>
                <TableCell>{type}</TableCell>
                <TableCell numericColumn>
                  <data value={sizeValue}>{size}</data>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

const checkboxRows = [
  {
    inputId: 'a28a0f41-b105-4891-82e4-10f9cbbc318e',
    inputLabel: '01239f.pdf',
    inputValue: '01239f.pdf',
    size: '0,3 MB',
    sizeValue: 304392,
    type: 'PDF',
  },
  {
    inputId: '59755bbe-de17-41ba-bcab-630906a157f6',
    inputLabel: 'vakantie.jpg',
    inputValue: 'vakantie.jpg',
    size: '2,4 MB',
    sizeValue: 2416582,
    type: 'PDF',
  },
  {
    inputId: 'efb4a150-59a2-49af-b7b7-9786a16e34e7',
    inputLabel: 'archief.zip',
    inputValue: 'archief.zip',
    size: '5,8 MB',
    sizeValue: 5799796,
    type: 'ZIP',
  },
];

export const TableRowColumnCheckbox: Story = {
  name: 'Table row with a checkbox that controls a column of checkboxes',
  args: {
    children: (
      <>
        <TableCaption>Bijlages die jij hebt toegevoegd</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">
              <Checkbox
                aria-label="Alles selecteren"
                aria-controls={checkboxRows.map(({ inputId }) => inputId).join(' ')}
              />{' '}
              Bestand
            </TableHeaderCell>
            <TableHeaderCell scope="col">Formaat</TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Bestandsgrootte
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {checkboxRows.map(({ inputId, inputLabel, inputValue, size, sizeValue, type }, index) => {
            return (
              <TableRow key={index}>
                <TableHeaderCell scope="row">
                  <FormLabel htmlFor={inputId} type="checkbox">
                    <Checkbox id={inputId} value={inputValue} /> <URLValue>{inputLabel}</URLValue>
                  </FormLabel>
                </TableHeaderCell>
                <TableCell>{type}</TableCell>
                <TableCell numericColumn>
                  <data value={sizeValue}>{size}</data>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Gebruik \`aria-controls\` om een koppeling te maken met welke checkboxes _checked_ of _not checked_ worden door een "Selecteer alles" checkbox te activeren.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableRowLink: Story = {
  name: 'Table row with a link',
  args: {
    children: (
      <>
        <TableCaption>Uitslag internetpeiling 8 juni tot en met 28 juni</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Gebied</TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Voor
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Tegen
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Locatie A</TableHeaderCell>
            <TableCell numericColumn>53</TableCell>
            <TableCell numericColumn>113</TableCell>
            <TableCell>
              <Link href="https://www.example.com/" aria-label="Details van Locatie A">
                Details
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row" id="locatie-b">
              Locatie B
            </TableHeaderCell>
            <TableCell numericColumn>58</TableCell>
            <TableCell numericColumn>42</TableCell>
            <TableCell>
              <Link href="https://www.example.com/" aria-label="Details van Locatie B">
                Details
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie C</TableHeaderCell>
            <TableCell numericColumn>87</TableCell>
            <TableCell numericColumn>16</TableCell>
            <TableCell>
              <Link href="https://www.example.com/" aria-label="Details van Locatie C">
                Details
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Zie ook: [WCAG Technique: Using \`aria-labelledby\` to concatenate a label from several text nodes](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9)`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableRowRadioButton: Story = {
  name: 'Table row with a radio button group',
  args: {
    children: (
      <>
        <TableCaption>Bijlages die jij hebt toegevoegd</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Bestand</TableHeaderCell>
            <TableHeaderCell scope="col">Formaat</TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Bestandsgrootte
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            {
              inputId: 'b63718b3-2e36-4c60-9431-182dcbd2cea3',
              inputLabel: '01239f.pdf',
              inputValue: '01239f.pdf',
              size: '0,3 MB',
              sizeValue: 304392,
              type: 'PDF',
            },
            {
              inputId: '9d060d70-1e48-40f0-b88e-0f251866c587',
              inputLabel: 'vakantie.jpg',
              inputValue: 'vakantie.jpg',
              size: '2,4 MB',
              sizeValue: 2416582,
              type: 'PDF',
            },
            {
              inputId: 'a0315de9-c59e-4fc7-bf94-633b9ac5c54a',
              inputLabel: 'archief.zip',
              inputValue: 'archief.zip',
              size: '5,8 MB',
              sizeValue: 5799796,
              type: 'ZIP',
            },
          ].map(({ inputId, inputLabel, inputValue, size, sizeValue, type }, index) => {
            return (
              <TableRow key={index}>
                <TableHeaderCell scope="row">
                  <FormLabel htmlFor={inputId} type="radio">
                    <RadioButton id={inputId} name="table-radio" defaultValue={inputValue} />{' '}
                    <URLValue>{inputLabel}</URLValue>
                  </FormLabel>
                </TableHeaderCell>
                <TableCell>{type}</TableCell>
                <TableCell numericColumn>
                  <data value={sizeValue}>{size}</data>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableRowSelected: Story = {
  name: 'Selected table row',
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow selected>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableColumnSelected: Story = {
  name: 'Table with a selected column',
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col" selected>
              Column B
            </TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell selected>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell selected>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableColumnSelectedStatus: Story = {
  name: 'Table with the status of selected columns',
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow selected>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  render: (({ children }: PropsWithChildren) => (
    <>
      <Table aria-describedby="82d4aed3-cdf3-46bd-a80f-275685e07138">{children}</Table>
      <p id="82d4aed3-cdf3-46bd-a80f-275685e07138" aria-atomic="true" aria-live="polite">
        1 rij geselecteerd
      </p>
    </>
  )) as any,
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableCellSelected: Story = {
  name: 'Selected table cell',
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell selected>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableColumnSort: Story = {
  name: 'Table row with a sorted column',
  args: {
    children: (
      <>
        <TableCaption>Uitslag internetpeiling 8 juni tot en met 28 juni</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col" aria-sort="ascending">
              Gebied
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Voor
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              Tegen
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Locatie A</TableHeaderCell>
            <TableCell numericColumn>53</TableCell>
            <TableCell numericColumn>113</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie B</TableHeaderCell>
            <TableCell numericColumn>58</TableCell>
            <TableCell numericColumn>42</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie C</TableHeaderCell>
            <TableCell numericColumn>87</TableCell>
            <TableCell numericColumn>16</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Gebruik \`aria-sort\` om duidelijk te maken welke kolom gesorteerd is. In dit voorbeeld is de kolom "Gebied" alfabetisch gesorteerd, van A-Z (\`ascendinding\`). Als de co`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableColumnSortButton: Story = {
  name: 'Table row with a sort button for a sorted column',
  args: {
    children: (
      <>
        <TableCaption>Uitslag internetpeiling 8 juni tot en met 28 juni</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col" aria-sort="none">
              <Button appearance="subtle" className="utrecht-table__header-cell-button">
                <Icon>
                  <IconArrowsSort />
                </Icon>
                Gebied
              </Button>
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              <Button appearance="subtle" className="utrecht-table__header-cell-button">
                <Icon>
                  <IconArrowsSort />
                </Icon>
                Voor
              </Button>
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              <Button appearance="subtle" className="utrecht-table__header-cell-button">
                <Icon>
                  <IconArrowsSort />
                </Icon>
                Tegen
              </Button>
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Locatie A</TableHeaderCell>
            <TableCell numericColumn>53</TableCell>
            <TableCell numericColumn>113</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie B</TableHeaderCell>
            <TableCell numericColumn>58</TableCell>
            <TableCell numericColumn>42</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie C</TableHeaderCell>
            <TableCell numericColumn>87</TableCell>
            <TableCell numericColumn>16</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {},
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableColumnSortAscendingButton: Story = {
  name: 'Table row with a sort button for a sorted column (ascending)',
  args: {
    children: (
      <>
        <TableCaption>Uitslag internetpeiling 8 juni tot en met 28 juni</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col" aria-sort="ascending">
              <Button appearance="subtle" className="utrecht-table__header-cell-button">
                <Icon>
                  <IconSortAscending />
                </Icon>
                Gebied
              </Button>
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              <Button appearance="subtle" className="utrecht-table__header-cell-button">
                <Icon>
                  <IconArrowsSort />
                </Icon>
                Voor
              </Button>
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              <Button appearance="subtle" className="utrecht-table__header-cell-button">
                <Icon>
                  <IconArrowsSort />
                </Icon>
                Tegen
              </Button>
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Locatie A</TableHeaderCell>
            <TableCell numericColumn>53</TableCell>
            <TableCell numericColumn>113</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie B</TableHeaderCell>
            <TableCell numericColumn>58</TableCell>
            <TableCell numericColumn>42</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie C</TableHeaderCell>
            <TableCell numericColumn>87</TableCell>
            <TableCell numericColumn>16</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {},
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableColumnSortDescendingButton: Story = {
  name: 'Table row with a sort button for a sorted column (descending)',
  args: {
    children: (
      <>
        <TableCaption>Uitslag internetpeiling 8 juni tot en met 28 juni</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col" aria-sort="descending">
              <Button appearance="subtle" className="utrecht-table__header-cell-button">
                <Icon>
                  <IconSortDescending />
                </Icon>
                Gebied
              </Button>
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              <Button appearance="subtle" className="utrecht-table__header-cell-button">
                <Icon>
                  <IconArrowsSort />
                </Icon>
                Voor
              </Button>
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              <Button appearance="subtle" className="utrecht-table__header-cell-button">
                <Icon>
                  <IconArrowsSort />
                </Icon>
                Tegen
              </Button>
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Locatie A</TableHeaderCell>
            <TableCell numericColumn>53</TableCell>
            <TableCell numericColumn>113</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie B</TableHeaderCell>
            <TableCell numericColumn>58</TableCell>
            <TableCell numericColumn>42</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie C</TableHeaderCell>
            <TableCell numericColumn>87</TableCell>
            <TableCell numericColumn>16</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {},
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableColumnSortLink: Story = {
  name: 'Table row with a sort link for a sorted column',
  args: {
    children: (
      <>
        <TableCaption>Uitslag internetpeiling 8 juni tot en met 28 juni</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col" aria-sort="none">
              <ButtonLink appearance="subtle" href="?sort=gebied" className="utrecht-table__header-cell-button">
                <Icon>
                  <IconArrowsSort />
                </Icon>
                Gebied
              </ButtonLink>
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              <ButtonLink appearance="subtle" href="?sort=voor" className="utrecht-table__header-cell-button">
                <Icon>
                  <IconArrowsSort />
                </Icon>
                Voor
              </ButtonLink>
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              <ButtonLink appearance="subtle" href="?sort=tegen" className="utrecht-table__header-cell-button">
                <Icon>
                  <IconArrowsSort />
                </Icon>
                Tegen
              </ButtonLink>
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Locatie A</TableHeaderCell>
            <TableCell numericColumn>53</TableCell>
            <TableCell numericColumn>113</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie B</TableHeaderCell>
            <TableCell numericColumn>58</TableCell>
            <TableCell numericColumn>42</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Locatie C</TableHeaderCell>
            <TableCell numericColumn>87</TableCell>
            <TableCell numericColumn>16</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {},
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableColumnDetails: Story = {
  name: 'Table with a detailed description for a column',
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col" aria-labelledby="11ca2281-a158-4307-84d1-fd2be45bff7d">
              <details>
                <summary id="11ca2281-a158-4307-84d1-fd2be45bff7d">Column B</summary>
                <div>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Paragraph>
                </div>
              </details>
            </TableHeaderCell>
            <TableHeaderCell scope="col" aria-labelledby="45ea2b83-d138-4249-937b-f0fdfa152f95">
              <details>
                <summary id="45ea2b83-d138-4249-937b-f0fdfa152f95">Column C</summary>
                <div>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Paragraph>
                </div>
              </details>
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell selected>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell selected>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableRowDetails: Story = {
  name: 'Table with a detailed description for a row',
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        story: `Als de \`rowheader\` niet alleen het label van de rij als inhoud heeft, dan moet het label. Je moet voorkomen dat de rij een veel te lang label krijgt, dan wordt de tabel onbruikbaar voor screen reader gebruikers. Gebruik \`<th scope="row" aria-labelledby="...">\` te kopellen aan het element dat een duidelijk label heeft.`,
      },
    },
  },
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row" aria-labelledby="725cdd65-806d-4bc2-808d-686d50264458">
              <details>
                <summary id="725cdd65-806d-4bc2-808d-686d50264458">Item 1</summary>
                <div>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Paragraph>
                </div>
              </details>
            </TableHeaderCell>
            <TableCell selected>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell selected>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

export const TableRowDataviz = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableCell colSpan={9}></TableCell>
            <TableCell colSpan={2}>Ontwikkeling laatste 4 jaar</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="column"></TableHeaderCell>
            <TableHeaderCell scope="column"></TableHeaderCell>
            <TableHeaderCell scope="column" className="utrecht-table__header-cell--numeric-column">
              2017
            </TableHeaderCell>
            <TableHeaderCell scope="column" className="utrecht-table__header-cell--numeric-column">
              2018
            </TableHeaderCell>
            <TableHeaderCell scope="column" className="utrecht-table__header-cell--numeric-column">
              2019
            </TableHeaderCell>
            <TableHeaderCell scope="column" className="utrecht-table__header-cell--numeric-column">
              2020
            </TableHeaderCell>
            <TableHeaderCell scope="column" className="utrecht-table__header-cell--numeric-column">
              2021
            </TableHeaderCell>
            <TableHeaderCell scope="column" className="utrecht-table__header-cell--numeric-column">
              2022
            </TableHeaderCell>
            <TableHeaderCell scope="column" className="utrecht-table__header-cell--numeric-column">
              2023
            </TableHeaderCell>
            <TableHeaderCell scope="column" className="utrecht-table__header-cell--numeric-column">
              Centrum
            </TableHeaderCell>
            <TableHeaderCell scope="column" className="utrecht-table__header-cell--numeric-column">
              Hele stad
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Wonen</TableHeaderCell>
            <TableCell>Eigen buurt (1-10)</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              7,9
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              7,8
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              8,1
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +0,2
            </TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +0,1
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Wonen</TableHeaderCell>
            <TableCell>Buurtontwikkeling (1-10)</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(246, 180, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,6
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 0, 0)', color: 'rgb(255, 255, 255)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,5
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              7,2
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +0,6
            </TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +0,1
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Openbare ruimte</TableHeaderCell>
            <TableCell>Schoon straat (1-10)</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,6
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,5
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,6
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              0
            </TableCell>
            <TableCell style={{ color: 'rgb(255, 0, 0)' }} className="utrecht-table__cell--numeric-column">
              -0,1
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Veiligheid</TableHeaderCell>
            <TableCell>Wel eens onveilig voelen buurt (%)</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              21
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              22
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              20
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              21
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              19
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              21
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              -1
            </TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              -2
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Verkeer</TableHeaderCell>
            <TableCell>Parkeren auto (1-10)</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(246, 180, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              5,6
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(246, 180, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              5,7
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(246, 180, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              5,9
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +0,3
            </TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +0,3
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Economie</TableHeaderCell>
            <TableCell>Boodschappen (1-10)</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              7,6
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              7,7
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              8
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +0,4
            </TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +0,1
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Werk en inkomen</TableHeaderCell>
            <TableCell>% Minimahuishoudens</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              12,7
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              12,5
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              12
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              -1,7
            </TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              -2
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Jeugd en zorg</TableHeaderCell>
            <TableCell>Kindvriendelijk (1-10)</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(246, 180, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,2
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(246, 180, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,3
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +0,1
            </TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              0
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Onderwijs</TableHeaderCell>
            <TableCell>Advies Havo/VWO (%)</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(0, 70, 153)', color: 'rgb(255, 255, 255)' }}
              className="utrecht-table__cell--numeric-column"
            >
              75,7
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(0, 70, 153)', color: 'rgb(255, 255, 255)' }}
              className="utrecht-table__cell--numeric-column"
            >
              75,3
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(0, 70, 153)', color: 'rgb(255, 255, 255)' }}
              className="utrecht-table__cell--numeric-column"
            >
              78,4
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +2,2
            </TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +2,9
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Sport en cultuur</TableHeaderCell>
            <TableCell>Sportgelegenheden (1-10)</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(246, 180, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,4
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(246, 180, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,1
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 0, 0)', color: 'rgb(255, 255, 255)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,1
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(255, 0, 0)' }} className="utrecht-table__cell--numeric-column">
              -0,3
            </TableCell>
            <TableCell style={{ color: 'rgb(255, 0, 0)' }} className="utrecht-table__cell--numeric-column">
              -0,3
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Ouderen</TableHeaderCell>
            <TableCell>Meest kwetsbaar (% 66+)</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              20
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              20
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              19
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              19
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(255, 0, 0)' }} className="utrecht-table__cell--numeric-column">
              +1
            </TableCell>
            <TableCell style={{ color: 'rgb(255, 0, 0)' }} className="utrecht-table__cell--numeric-column">
              +1
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Gezondheid en zorg</TableHeaderCell>
            <TableCell>(zeer) gezond (%)</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(0, 160, 60)', color: 'rgb(255, 255, 255)' }}
              className="utrecht-table__cell--numeric-column"
            >
              85
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +2
            </TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +3
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Duurzaamheid</TableHeaderCell>
            <TableCell>A/B (%)</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              11,4
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              14,1
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(246, 180, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              16,9
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(246, 180, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              17,4
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(246, 180, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              20,8
            </TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +6,7
            </TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +12,2
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Sociale kracht</TableHeaderCell>
            <TableCell>Sociale cohesie (1-10)</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              5,7
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              5,7
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              5,7
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              5,9
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,1
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(255, 244, 152)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,2
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +0,5
            </TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +0,4
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Sociale kracht</TableHeaderCell>
            <TableCell>SES (gemiddeld)</TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,9
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,9
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(180, 230, 0)', color: 'rgb(0, 0, 0)' }}
              className="utrecht-table__cell--numeric-column"
            >
              6,9
            </TableCell>
            <TableCell
              style={{ 'background-color': 'rgb(0, 160, 60)', color: 'rgb(255, 255, 255)' }}
              className="utrecht-table__cell--numeric-column"
            >
              7
            </TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell className="utrecht-table__cell--numeric-column">-</TableCell>
            <TableCell style={{ color: 'rgb(0, 160, 60)' }} className="utrecht-table__cell--numeric-column">
              +0,1
            </TableCell>
            <TableCell style={{ color: 'rgb(255, 0, 0)' }} className="utrecht-table__cell--numeric-column">
              -0,2
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableColorSample: Story = {
  render: ({
    caption,
    inlineSize,
    labelId,
    children,
  }: PropsWithChildren<{ caption: ReactNode; labelId: string; inlineSize: string }>) => (
    <>
      <Heading id={labelId} level={3}>
        {caption}
      </Heading>
      <Table aria-labelledby={labelId} style={{ inlineSize }}>
        {children}
      </Table>
    </>
  ),
  args: {
    labelId: 'c2473c76-8545-4006-b232-19ca9792a3c7',
    caption: 'Bevolkingsprognose (65+) Wijken in 2030',
    inlineSize: 'auto',
    children: (
      <>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">
              <ColorSample color="#e5cdda">
                <ExampleInvisibleText>licht paars</ExampleInvisibleText>
              </ColorSample>
            </TableHeaderCell>
            <TableCell>laagste waarde</TableCell>
            <TableCell>58</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">
              <ColorSample color="#a00078">
                <ExampleInvisibleText>paars</ExampleInvisibleText>
              </ColorSample>
            </TableHeaderCell>
            <TableCell>hoogste waarde</TableCell>
            <TableCell>4.857</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell></TableCell>
            <TableHeaderCell scope="row">Amsterdam</TableHeaderCell>
            <TableCell>190.497</TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableStatusBadge: Story = {
  args: {
    children: (
      <>
        <TableHeader sticky>
          <TableRow>
            <TableHeaderCell sticky scope="row">
              Status
            </TableHeaderCell>
            <TableHeaderCell sticky scope="row">
              Method
            </TableHeaderCell>
            <TableHeaderCell sticky scope="row">
              Domain
            </TableHeaderCell>
            <TableHeaderCell scope="row">File</TableHeaderCell>
            <TableHeaderCell scope="row" numericColumn>
              Transferred
            </TableHeaderCell>
            <TableHeaderCell scope="row" numericColumn>
              Size
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(42)
            .fill(42)
            .map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <StatusBadge status="ok">
                    <Code>200</Code>
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  <Code>GET</Code>
                </TableCell>
                <TableCell>
                  <Icon>
                    <IconLock />
                  </Icon>
                  <URLValue>localhost:6006</URLValue>
                </TableCell>
                <TableCell>
                  <URLValue>/?path=/story/css-table--table-url-value</URLValue>
                </TableCell>
                <TableCell numericColumn>2,04 kB</TableCell>
                <TableCell numericColumn>4,98 kB</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </>
    ),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  render: (({ children }: PropsWithChildren) => (
    <>
      <div className="utrecht-table__container" style={{ maxBlockSize: '20em' }}>
        <Table style={{ tableLayout: 'fixed' }} className="utrecht-table--oneline">
          {children}
        </Table>
      </div>
    </>
  )) as any,
};

export const TableDialog: Story = {
  name: 'Table that shows in a dialog',
  render: () => {
    const ExampleTable = () => (
      <Table>
        <TableCaption>
          Tabel 3 Budgettaire gevolgen van beleid art. 2 Functionele uitgaven van de Koning (bedragen x € 1.000)
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col" sticky></TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              2021
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              2022
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              2023
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              2024
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              2025
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              2026
            </TableHeaderCell>
            <TableHeaderCell scope="col" numericColumn>
              2027
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row" sticky>
              Verplichtingen
            </TableHeaderCell>
            <TableCell numericColumn>31.167</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
          </TableRow>
          <TableRow aria-hidden="true">
            <TableHeaderCell scope="row" sticky></TableHeaderCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row" sticky>
              Uitgaven
            </TableHeaderCell>
            <TableCell numericColumn>31.167</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
          </TableRow>
          <TableRow aria-hidden="true">
            <TableHeaderCell scope="row" sticky></TableHeaderCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row" sticky>
              Institutionele Inrichting
            </TableHeaderCell>
            <TableCell numericColumn>31.167</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
            <TableCell numericColumn>32.188</TableCell>
          </TableRow>
          <TableRow aria-hidden="true">
            <TableHeaderCell scope="row" sticky></TableHeaderCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row" sticky>
              Ontvangsten
            </TableHeaderCell>
            <TableCell numericColumn>0</TableCell>
            <TableCell numericColumn>0</TableCell>
            <TableCell numericColumn>0</TableCell>
            <TableCell numericColumn>0</TableCell>
            <TableCell numericColumn>0</TableCell>
            <TableCell numericColumn>0</TableCell>
            <TableCell numericColumn>0</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const [open, setOpen] = useState(false);
    const tableDialog = createRef<HTMLDialogElement>();
    const showModal = () => {
      if (tableDialog.current) {
        setOpen(true);
        tableDialog.current.showModal();
      }
    };

    return (
      <>
        <ButtonGroup>
          <Button onClick={showModal} aria-pressed={open} aria-haspopup="dialog">
            Show table in dialog
          </Button>
        </ButtonGroup>
        <ExampleTable />
        <ExampleDialog ref={tableDialog}>
          <ExampleTable />
        </ExampleDialog>
      </>
    );
  },
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const TableFullscreen: Story = {
  name: 'Table that shows in fullscreen',
  render: () => {
    const tableContainer = createRef<HTMLDivElement>();

    const fullscreenProps = useFullscreenButton({ target: tableContainer });

    return (
      <>
        <ExampleFullscreenDocument ref={tableContainer}>
          <ButtonGroup>
            <Button {...fullscreenProps}>
              {fullscreenProps.pressed ? 'Terug uit volledig scherm' : 'Tabel in volledig scherm bekijken'}
            </Button>
          </ButtonGroup>
          <Table>
            <TableCaption>
              Tabel 3 Budgettaire gevolgen van beleid art. 2 Functionele uitgaven van de Koning (bedragen x € 1.000)
            </TableCaption>
            <TableHeader sticky>
              <TableRow>
                <TableHeaderCell scope="col">Column A</TableHeaderCell>
                <TableHeaderCell scope="col">Column B</TableHeaderCell>
                <TableHeaderCell scope="col">Column C</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array(42)
                .fill(42)
                .map((_, index) => (
                  <TableRow key={index}>
                    <TableHeaderCell scope="row">Item {index + 1}</TableHeaderCell>
                    <TableCell>Data</TableCell>
                    <TableCell>More data</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </ExampleFullscreenDocument>
      </>
    );
  },
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Voor fullscreen is het belangrijk dat een \`background-color\` en \`color\` zijn ingesteld op de _container element_ die fullscreen wordt. De design token voor \`utrecht.table.background-color\` is niet voldoende, omdat de _table caption_ niet de achtergrondkleur krijgt van de table. Gebruik daarom fullscreen niet op de \`<table>\`, maar op een container element.

Stel ook \`overflow: auto\` in op de container element, zodat je kan scrollen om een lange tabel te zien.`,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
