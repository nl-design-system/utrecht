import { HTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import { Drawer } from './Drawer';
import { Figure } from './Figure';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';
import { TableHeader } from './TableHeader';
import { TableHeaderCell } from './TableHeaderCell';
import { TableRow } from './TableRow';
import { VegaVisualization } from './VegaVisualization';
import './styles/FigureDetails.css';

interface FigureDetailsProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  openButtonText: string;
  closeButtonText: string;
  drawerClassName?: string;
  children?: any;
}

export const FigureDetails = ({
  openButtonText,
  closeButtonText,
  drawerClassName,
  children,
}: PropsWithChildren<FigureDetailsProps>) => {
  const [open, setOpen] = useState(false);
  const drawer = useRef<HTMLDialogElement>(null);
  const showModal = () => {
    if (drawer.current) {
      setOpen(true);
      drawer.current.showModal();
    }
  };

  const closeModal = () => {
    setOpen(false);
    drawer.current?.close();
  };

  useEffect(() => {
    // close the dialog when someone clicked the backdrop
    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target === drawer.current) {
        closeModal();
      }
    };
    document.addEventListener('click', handleBackdropClick);

    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  let FigureDetails = (
    <div>
      <Button onClick={showModal}>{openButtonText}</Button>
      <Drawer className={drawerClassName} ref={drawer} open={open}>
        <Button onClick={closeModal}>{closeButtonText}</Button>
        {children}
      </Drawer>
    </div>
  );
  return FigureDetails;
};
export default function Home() {
  return (
    <Figure>
      <VegaVisualization
        spec={{
          $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
          data: {
            values: [
              {
                a: 'A',
                b: 28,
              },
              {
                a: 'B',
                b: 55,
              },
              {
                a: 'C',
                b: 43,
              },
              {
                a: 'D',
                b: 91,
              },
              {
                a: 'E',
                b: 81,
              },
              {
                a: 'F',
                b: 53,
              },
              {
                a: 'G',
                b: 19,
              },
              {
                a: 'H',
                b: 87,
              },
              {
                a: 'I',
                b: 52,
              },
            ],
          },
          description: 'A simple bar chart with embedded data.',
          encoding: {
            x: {
              axis: {
                labelAngle: 0,
              },
              field: 'a',
              title: 'x-Axis',
              type: 'nominal',
            },
            y: {
              field: 'b',
              title: 'y-Axis',
              type: 'quantitative',
            },
          },
          mark: 'bar',
          title: 'Staafgrafiek',
        }}
        label="Bla bla heel toegankelijk"
      />
      <FigureDetails
        drawerClassName="utrecht-figure-details"
        openButtonText={'open tabel'}
        closeButtonText={'close tabel'}
      >
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
        </Table>
      </FigureDetails>
    </Figure>
  );
}
