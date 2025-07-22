import {
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Heading4,
  Link,
  LinkList,
  LinkListLink,
  PageFooter,
  Paragraph,
  RadioButton,
  Separator,
  Strong,
} from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
const HulpEnContact: React.FC = () => {
  return (
    <>
      <PageFooter className="utrecht-footer-grid">
        <Heading2 className="-footer-titleutrecht">Hulp en Contact Amsterdamsestraatweg</Heading2>
        <div className="utrecht-footer-column">
          <Heading4>Telefoon</Heading4>
          <Link href="tel:14003">14030</Link>
        </div>

        <div className="footer-column">
          <Heading4>Volg ons</Heading4>
        </div>
      </PageFooter>
    </>
  );
};

export default HulpEnContact;
