import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import React from 'react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
} from '../../../../../component-library-react/src/index.js';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  // Items na Home; Home staat altijd vooraan en hoeft niet meegegeven te worden
  items?: BreadcrumbItem[];
}

const home: BreadcrumbItem = { label: 'Home', href: 'https://www.utrecht.nl/' };

// Veelgebruikte rubrieken, zodat pagina's ze niet steeds opnieuw hoeven uit te schrijven
export const wonenEnLeven: BreadcrumbItem = {
  label: 'Wonen en leven',
  href: 'https://www.utrecht.nl/wonen-en-leven',
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items = [] }) => {
  return (
    <BreadcrumbNav>
      {[home, ...items].map((item, index) => (
        <BreadcrumbNavLink key={item.href} href={item.href} index={index}>
          {/* Het eerste item heeft geen pijltje ervoor */}
          <BreadcrumbNavSeparator>{index > 0 && <UtrechtIconChevronRight />}</BreadcrumbNavSeparator>
          {item.label}
        </BreadcrumbNavLink>
      ))}
    </BreadcrumbNav>
  );
};

export default Breadcrumb;
