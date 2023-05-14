/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';
import { ButtonGroup } from '../../button-group/css/story-template';
import { Button } from '../../button/css/story-template';
import { CustomCheckbox } from '../../custom-checkbox/css/story-template';
import { CustomRadioButton } from '../../custom-radio-button/css/story-template';
import { FormLabel } from '../../form-label/css/story-template';
import { Link } from '../../link/css/story-template';
import { URLTemplate as URLValue } from '../../url/css/story-template';

export const argTypes = {
  alternateRowColor: {
    description: 'Alternate row color',
    control: 'boolean',
  },
};

export const defaultArgs = {
  alternateRowColor: false,
};

// Source of table:
// https://www.utrecht.nl/wonen-en-leven/parkeren/ervaart-u-parkeeroverlast/spinozaplantsoen-invoeren-betaald-parkeren/

export const Table = ({ children, className, ...restProps }) => (
  <table className={clsx('utrecht-table', className)} {...restProps}>
    {children}
  </table>
);

export const TableRow = ({ children, className, ...restProps }) => (
  <tr className={clsx('utrecht-table__row', className)} {...restProps}>
    {children}
  </tr>
);

export const TableHeader = ({ children, className, ...restProps }) => (
  <thead className={clsx('utrecht-table__header', className)} {...restProps}>
    {children}
  </thead>
);

export const TableHeaderCell = ({ children, className, numericColumn = false, ...restProps }) => (
  <th
    className={clsx(
      'utrecht-table__header-cell',
      {
        'utrecht-table__header-cell--numeric-column': numericColumn,
      },
      className,
    )}
    {...restProps}
  >
    {children}
  </th>
);

export const TableCell = ({ children, className, numericColumn = false, ...restProps }) => (
  <td
    className={clsx(
      'utrecht-table__cell',
      {
        'utrecht-table__cell--numeric-column': numericColumn,
      },
      className,
    )}
    {...restProps}
  >
    {children}
  </td>
);

export const TableCaption = ({ children, className, ...restProps }) => (
  <caption className={clsx('utrecht-table__caption', className)} {...restProps}>
    {children}
  </caption>
);

export const TableBody = ({ children, className, ...restProps }) => (
  <tbody className={clsx('utrecht-table__body', className)} {...restProps}>
    {children}
  </tbody>
);

export const TableFooter = ({ children, className, ...restProps }) => (
  <tfoot className={clsx('utrecht-table__footer', className)} {...restProps}>
    {children}
  </tfoot>
);

export const ExampleTable = () => (
  <Table>
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
        <TableCell>Locatie A</TableCell>
        <TableCell numericColumn>53</TableCell>
        <TableCell numericColumn>113</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Locatie B</TableCell>
        <TableCell numericColumn>58</TableCell>
        <TableCell numericColumn>42</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Locatie C</TableCell>
        <TableCell numericColumn>87</TableCell>
        <TableCell numericColumn>16</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const ExampleTableWithLink = () => (
  <Table>
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
          <Link href="https://www.example.com/" ariaLabel="Details van Locatie A">
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
          <Link href="https://www.example.com/" ariaLabel="Details van Locatie B">
            Details
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell scope="row">Locatie C</TableHeaderCell>
        <TableCell numericColumn>87</TableCell>
        <TableCell numericColumn>16</TableCell>
        <TableCell>
          <Link href="https://www.example.com/" ariaLabel="Details van Locatie C">
            Details
          </Link>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const ExampleTableWithButton = () => (
  <Table>
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
          <Button appearance="subtle-button" ariaLabel="Locatie A bewerken">
            Bewerken
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell scope="row">Locatie B</TableHeaderCell>
        <TableCell numericColumn>58</TableCell>
        <TableCell numericColumn>42</TableCell>
        <TableCell>
          <Button appearance="subtle-button" ariaLabel="Locatie B bewerken">
            Bewerken
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell scope="row">Locatie C</TableHeaderCell>
        <TableCell numericColumn>87</TableCell>
        <TableCell numericColumn>16</TableCell>
        <TableCell>
          <Button appearance="subtle-button" ariaLabel="Locatie C bewerken">
            Bewerken
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const ExampleTableWithButtonGroup = () => (
  <Table>
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
            <Button appearance="subtle-button" ariaLabel="Locatie A bewerken">
              Bewerken
            </Button>
            <Button appearance="subtle-button" hint="danger" ariaLabel="Locatie A verwijderen">
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
            <Button appearance="subtle-button" ariaLabel="Locatie B bewerken">
              Bewerken
            </Button>
            <Button appearance="subtle-button" hint="danger" ariaLabel="Locatie B verwijderen">
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
            <Button appearance="subtle-button" ariaLabel="Locatie C bewerken">
              Bewerken
            </Button>
            <Button appearance="subtle-button" hint="danger" ariaLabel="Locatie C verwijderen">
              Verwijderen
            </Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const ExampleTableWithCheckbox = ({ selectAllCheckbox = false, selectAllLabel = 'Selecteer alles' }) => {
  const rows = [
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

  return (
    <Table>
      <TableCaption>Bijlages die jij hebt toegevoegd</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">
            {selectAllCheckbox ? (
              <>
                <CustomCheckbox
                  aria-label={selectAllLabel}
                  aria-controls={rows.map(({ inputId }) => inputId).join(' ')}
                />{' '}
              </>
            ) : null}
            Bestand
          </TableHeaderCell>
          <TableHeaderCell scope="col">Formaat</TableHeaderCell>
          <TableHeaderCell scope="col" numericColumn>
            Bestandsgrootte
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(({ inputId, inputLabel, inputValue, size, sizeValue, type }) => {
          return (
            <TableRow>
              <TableHeaderCell scope="row">
                <FormLabel htmlFor={inputId} type="checkbox">
                  <CustomCheckbox id={inputId} /> <URLValue>{inputLabel}</URLValue>
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
    </Table>
  );
};

export const ExampleTableWithRadioButton = () => {
  const rows = [
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
  ];

  return (
    <Table>
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
        {rows.map(({ inputId, inputLabel, inputValue, size, sizeValue, type }) => {
          return (
            <TableRow>
              <TableHeaderCell scope="row">
                <FormLabel htmlFor={inputId} type="radio">
                  <CustomRadioButton id={inputId} name="table-radio" defaultValue={inputValue} />{' '}
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
    </Table>
  );
};

export default Table;
