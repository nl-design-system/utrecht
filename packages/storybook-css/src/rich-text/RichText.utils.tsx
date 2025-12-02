import {
  AccordionProvider,
  ActionGroup,
  Alert,
  BadgeList,
  Blockquote,
  BreadcrumbNav,
  BreadcrumbNavLink,
  Button,
  ButtonGroup,
  DataBadge,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  Figure,
  FigureCaption,
  FormField,
  FormFieldDescription,
  FormFieldErrorMessage,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Image,
  Link,
  OrderedList,
  OrderedListItem,
  Paragraph,
  RichText,
  Select,
  SelectOption,
  Separator,
  SpotlightSection,
  StatusBadge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
  Textarea,
  Textbox,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import React from 'react';

const AccordionStory = () => (
  <AccordionProvider
    sections={[
      {
        id: React.useId(),
        label: 'Accordion 1',
        headingLevel: 2,
        body: <Paragraph>Accordion Template Body</Paragraph>,
      },
      {
        id: React.useId(),
        label: 'Accordion 2',
        headingLevel: 2,
        body: <Paragraph>Accordion Template Body 2</Paragraph>,
      },
      {
        id: React.useId(),
        label: 'Accordion 3',
        headingLevel: 2,
        body: <Paragraph>Accordion Template Body 3</Paragraph>,
      },
    ]}
  />
);
const ActionGroupStory = () => (
  <ActionGroup>
    <Button appearance="primary-action-button">Save and continue</Button>
    <Button appearance="secondary-action-button">Back</Button>
  </ActionGroup>
);
const AlertStory = () => (
  <Alert>
    <Heading1>Lorem ipsum</Heading1>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Paragraph>
  </Alert>
);
const SpotlightSectionStory = () => (
  <SpotlightSection>
    <Heading1>Lorem ipsum</Heading1>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Paragraph>
  </SpotlightSection>
);
const BadgeListStory = () => (
  <BadgeList>
    <DataBadge>Badge A</DataBadge>
    <DataBadge>Badge B</DataBadge>
    <DataBadge>Badge C</DataBadge>
  </BadgeList>
);
const BlockquoteStory = () => (
  <Blockquote>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    </Paragraph>
  </Blockquote>
);
const ButtonGroupStory = () => (
  <ButtonGroup>
    <Button appearance="primary-action-button">Save and continue</Button>
    <Button appearance="secondary-action-button">Back</Button>
  </ButtonGroup>
);

const DataListStory = () => (
  <DataList>
    <DataListItem>
      <DataListKey>Gereserveerde zitplaats</DataListKey>
      <DataListValue>42</DataListValue>
    </DataListItem>
  </DataList>
);

const BreadcrumbNavStory = () => (
  <BreadcrumbNav>
    <BreadcrumbNavLink href="/" rel="home" index={0}>
      Home
    </BreadcrumbNavLink>
    <BreadcrumbNavLink href="/a/" index={1}>
      Niveau 1
    </BreadcrumbNavLink>
    <BreadcrumbNavLink href="/a/b/" rel="up" index={2}>
      Niveau 2
    </BreadcrumbNavLink>
  </BreadcrumbNav>
);
const FigureStory = () => (
  <Figure>
    <ImageStory />
    <FigureCaption>
      Fotograaf: Gemeente Utrecht
      <br />
      Titel: Nijntje Vuelta
      <br />
      Locatie: Stadsplateau
      <br />
      Geplaatst: 17 augustus 2022
      <br />
      <Link
        href="https://www.flickr.com/photos/gemeenteutrecht/52287504255/in/dateposted-public/"
        external
        title="'Nijntje / Vuelta' op Flickr"
      >
        Bron: Flickr
      </Link>
    </FigureCaption>
  </Figure>
);
const Heading1Story = () => <Heading1>Heading 1</Heading1>;
const Heading2Story = () => <Heading2>Heading 2</Heading2>;
const Heading3Story = () => <Heading3>Heading 3</Heading3>;
const Heading4Story = () => <Heading4>Heading 4</Heading4>;
const Heading5Story = () => <Heading5>Heading 5</Heading5>;
const Heading6Story = () => <Heading6>Heading 6</Heading6>;
const ButtonStory = () => <Button>Button</Button>;
const FormFieldStory = () => (
  <FormField type="text">
    <FormLabel htmlFor="123084731n">Tweet</FormLabel>
    <Paragraph className="utrecht-form-field__input">
      <Textbox id="123084731n" />
    </Paragraph>
    Maximaal 140 karakters
  </FormField>
);
const FormFieldDescriptionStory = () => <FormFieldDescription>Beschrijving van het form field</FormFieldDescription>;
const FormFieldErrorMessageStory = () => <FormFieldErrorMessage>Error in dit formulierveld.</FormFieldErrorMessage>;
const FormLabelStory = () => <FormLabel>Label voor formulierveld</FormLabel>;
const ImageStory = () => (
  <Image
    photo
    alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
    height={1536}
    src="example/photo-nijntje-vuelta.jpg"
    width={2048}
  />
);
const LinkStory = () => <Link href="#">Naar dezelfde pagina</Link>;
const OrderedListStory = () => (
  <OrderedList>
    <OrderedListItem>List item 1</OrderedListItem>
    <OrderedListItem>List item 2</OrderedListItem>
    <OrderedListItem>List item 3</OrderedListItem>
  </OrderedList>
);
const ParagraphStory = () => <Paragraph>Alinea met een hoop tekst. Of juist lekker weinig.</Paragraph>;
const SelectStory = () => (
  <Select>
    <SelectOption value="a">Optie A</SelectOption>
    <SelectOption value="b">Optie B</SelectOption>
    <SelectOption value="c">Optie C</SelectOption>
  </Select>
);
const StatusBadgeStory = () => <StatusBadge>Status</StatusBadge>;
const UnorderedListStory = () => (
  <UnorderedList>
    <UnorderedListItem>List item 1</UnorderedListItem>
    <UnorderedListItem>List item 2</UnorderedListItem>
    <UnorderedListItem>List item 3</UnorderedListItem>
  </UnorderedList>
);
const TableStory = () => (
  <TableContainer>
    <Table>
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <TableHeader>
        <TableRow>
          <TableCell>Country</TableCell>
          <TableCell>Population</TableCell>
          <TableCell>Area (km²)</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Country</TableCell>
          <TableCell>Population</TableCell>
          <TableCell>Area (km²)</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Country</TableCell>
          <TableCell>Population</TableCell>
          <TableCell>Area (km²)</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </TableContainer>
);
const componentMap = {
  'utrecht-accordion': AccordionStory,
  'utrecht-alert': AlertStory,
  'utrecht-spotlight-section': SpotlightSectionStory,
  'utrecht-badge-list': BadgeListStory,
  'utrecht-blockquote': BlockquoteStory,
  'utrecht-breadcrumb-nav': BreadcrumbNavStory,
  'utrecht-button': ButtonStory,
  'utrecht-button-group': ButtonGroupStory,
  'utrecht-action-group': ActionGroupStory,
  'utrecht-data-list': DataListStory,
  'utrecht-form-field': FormFieldStory,
  'utrecht-figure': FigureStory,
  'utrecht-form-field-description': FormFieldDescriptionStory,
  'utrecht-form-field-error-message': FormFieldErrorMessageStory,
  'utrecht-form-label': FormLabelStory,
  'utrecht-heading-1': Heading1Story,
  'utrecht-heading-2': Heading2Story,
  'utrecht-heading-3': Heading3Story,
  'utrecht-heading-4': Heading4Story,
  'utrecht-heading-5': Heading5Story,
  'utrecht-heading-6': Heading6Story,
  'utrecht-img': ImageStory,
  'utrecht-link': LinkStory,
  'utrecht-ordered-list': OrderedListStory,
  'utrecht-paragraph': ParagraphStory,
  'utrecht-table': TableStory,
  'utrecht-select': SelectStory,
  'utrecht-separator': Separator,
  'utrecht-badge-status': StatusBadgeStory,
  'utrecht-textarea': Textarea,
  'utrecht-textbox': Textbox,
  'utrecht-unordered-list': UnorderedListStory,
};
const getComponent = (name: string) => {
  const component = componentMap[name as keyof typeof componentMap];
  return component || <></>;
};

export const StoryTemplate = ({ component }: { component?: keyof typeof componentMap }) => {
  const siblings = componentPairs.find(({ component: c }) => c === component)?.siblings || [];

  return (
    <RichText>
      {component ? (
        siblings.map((sibling) => {
          const Component = getComponent(component);
          const Sibling = getComponent(sibling);

          return (
            <>
              <Component />
              <Sibling />
            </>
          );
        })
      ) : (
        <>
          <Heading1>Heading 1</Heading1>
          <Heading2>Heading 2</Heading2>
          <Heading3>Heading 3</Heading3>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce ullamcorper dapibus nisl. In id dui. Nunc
            pulvinar erat et nibh. Integer sollicitudin. Quisque faucibus. Sed eleifend sapien sed nunc. Pellentesque
            congue leo et felis eleifend scelerisque. In a mauris ultricies diam tincidunt pharetra. Etiam venenatis
            facilisis orci. Donec quam dui, mattis eu, posuere a, tristique ut, pede. Sed quis nibh. Praesent augue
            metus, dapibus ac, consectetuer a, convallis eu, elit. Etiam et dui.
          </Paragraph>
          <Heading2>Heading 2</Heading2>
          <Paragraph>
            Vestibulum vitae metus sed purus elementum malesuada. Aliquam feugiat metus ut orci. Etiam scelerisque lacus
            eu tellus. Praesent neque est, placerat in, rhoncus nec, tempor eleifend, sem. Mauris quis leo ut urna
            porttitor auctor. Nulla a mi. Nulla risus turpis, rhoncus auctor, tempus eu, molestie rhoncus, metus.
          </Paragraph>
          <Heading3>Heading 3</Heading3>
          <Paragraph>
            Suspendisse fermentum nisl eget odio. Donec interdum sem a ante. Fusce dui ante, ultricies ac, mollis sit
            amet, vestibulum nec, tellus. Mauris vel dolor et purus fermentum ultrices. Donec scelerisque lectus at
            orci.
          </Paragraph>
          <Heading4>Goede dingen om op te zitten</Heading4>
          <UnorderedList>
            <UnorderedListItem>Stoel</UnorderedListItem>
            <UnorderedListItem>Krat</UnorderedListItem>
            <UnorderedListItem>Paard</UnorderedListItem>
          </UnorderedList>
          <Heading4>Beter niet op zitten</Heading4>
          <UnorderedList>
            <UnorderedListItem>Kat</UnorderedListItem>
            <UnorderedListItem>Zebrapad</UnorderedListItem>
            <UnorderedListItem>Tafel</UnorderedListItem>
          </UnorderedList>
          <Heading5>Uitzonderingen</Heading5>
          <Alert type="error">
            <Paragraph>Pas op! Het is niet de bedoeling om uitzonderingen te maken</Paragraph>
          </Alert>
          <SpotlightSection>
            <Paragraph>Pas op! Het is niet de bedoeling om uitzonderingen te maken</Paragraph>
          </SpotlightSection>
          <Heading6>Quotes van mensen die uitzonderlijk hebben gezeten</Heading6>
          <Blockquote>
            <Paragraph>Ik zat ooit op een emmer, dat hou je niet lang vol!</Paragraph>
          </Blockquote>
          <Blockquote>
            <Paragraph>Ik zat ooit op een vloerkleed, daar val je van in slaap...</Paragraph>
          </Blockquote>
        </>
      )}
    </RichText>
  );
};

interface ComponentPairs {
  component: keyof typeof componentMap;
  siblings: Array<keyof typeof componentMap>;
}

export const componentPairs: ComponentPairs[] = [
  {
    component: 'utrecht-heading-1',
    siblings: [
      'utrecht-heading-2',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-badge-status',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-heading-2',
    siblings: [
      'utrecht-heading-3',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-badge-status',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-heading-3',
    siblings: [
      'utrecht-heading-4',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-badge-status',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-heading-4',
    siblings: [
      'utrecht-heading-5',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-badge-status',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-heading-5',
    siblings: [
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-badge-status',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-heading-6',
    siblings: [
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-badge-status',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-accordion',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-alert',
    siblings: [
      'utrecht-heading-1',
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-badge-status',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-spotlight-section',
    siblings: [
      'utrecht-heading-1',
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-badge-status',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-badge-list',
    siblings: [
      'utrecht-heading-1',
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-blockquote',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-breadcrumb-nav',
    siblings: [
      'utrecht-heading-1',
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-badge-status',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-button',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',

      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-button-group',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-action-group',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-data-list',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-figure',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-form-field',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-figure',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-form-field-description',
    siblings: ['utrecht-form-field-error-message', 'utrecht-select', 'utrecht-textarea', 'utrecht-textbox'],
  },
  {
    component: 'utrecht-form-field-error-message',
    siblings: [
      'utrecht-form-field-description',
      'utrecht-form-field-error-message',
      'utrecht-select',
      'utrecht-textarea',
      'utrecht-textbox',
    ],
  },
  {
    component: 'utrecht-form-label',
    siblings: [
      'utrecht-form-field-description',
      'utrecht-form-field-error-message',
      'utrecht-select',
      'utrecht-textarea',
      'utrecht-textbox',
    ],
  },
  {
    component: 'utrecht-img',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-link',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-ordered-list',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-paragraph',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-spotlight-section',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-select',
    siblings: ['utrecht-form-field-description', 'utrecht-form-field-error-message'],
  },
  {
    component: 'utrecht-separator',
    siblings: [
      'utrecht-heading-1',
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-badge-status',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-badge-status',
    ],
  },
  {
    component: 'utrecht-table',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
  {
    component: 'utrecht-textarea',
    siblings: ['utrecht-form-field-description', 'utrecht-form-field-error-message'],
  },
  {
    component: 'utrecht-textbox',
    siblings: ['utrecht-form-field-description', 'utrecht-form-field-error-message'],
  },
  {
    component: 'utrecht-unordered-list',
    siblings: [
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
      'utrecht-accordion',
      'utrecht-alert',
      'utrecht-badge-list',
      'utrecht-blockquote',
      'utrecht-button',
      'utrecht-button-group',
      'utrecht-action-group',
      'utrecht-data-list',
      'utrecht-form-field',
      'utrecht-img',
      'utrecht-link',
      'utrecht-ordered-list',
      'utrecht-paragraph',
      'utrecht-separator',
      'utrecht-table',
      'utrecht-unordered-list',
    ],
  },
];
