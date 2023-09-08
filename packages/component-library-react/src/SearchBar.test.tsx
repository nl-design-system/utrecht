import { fireEvent, getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { SearchBar } from './SearchBar';

const languages = [
  {
    title: '1970s',
    list: [
      {
        name: 'C',
        year: 1972,
      },
    ],
  },
  {
    title: '1980s',
    list: [
      {
        name: 'C++',
        year: 1983,
      },
      {
        name: 'Perl',
        year: 1987,
      },
    ],
  },
  {
    title: '1990s',
    list: [
      {
        name: 'Haskell',
        year: 1990,
      },
      {
        name: 'Python',
        year: 1991,
      },
      {
        name: 'Java',
        year: 1995,
      },
      {
        name: 'Javascript',
        year: 1995,
      },
      {
        name: 'PHP',
        year: 1995,
      },
      {
        name: 'Ruby',
        year: 1995,
      },
    ],
  },
  {
    title: '2000s',
    list: [
      {
        name: 'C#',
        year: 2000,
      },
      {
        name: 'Scala',
        year: 2003,
      },
      {
        name: 'Clojure',
        year: 2007,
      },
      {
        name: 'Go',
        year: 2009,
      },
    ],
  },
  {
    title: '2010s',
    list: [
      {
        name: 'Elm',
        year: 2012,
      },
    ],
  },
];

const itemToStringHandler = (item: any) => {
  return item ? item.name : '';
};

describe('SearchBar', () => {
  describe('input', () => {
    it('renders a search type element', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          button={{
            label: 'Zoeken',
          }}
        />,
      );

      const SearchBarInput = container.querySelector('input[type="search"]');

      expect(SearchBarInput).toBeInTheDocument();
      expect(SearchBarInput).toBeVisible();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          button={{
            label: 'Zoeken',
          }}
        />,
      );

      const SearchBarInput = container.querySelector('input');

      expect(SearchBarInput).toHaveClass('utrecht-search-bar__input');
    });

    it('can have an `aria-label` attribute', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          button={{
            label: 'Zoeken',
          }}
          input={{
            'aria-label': 'zoektermen',
          }}
        />,
      );

      const SearchBarInput = container.querySelector('.utrecht-search-bar__input');

      expect(SearchBarInput).toHaveAttribute('aria-label');
    });

    it('can have a `placeholder` attribute', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          button={{
            label: 'Zoeken',
          }}
          input={{
            'aria-label': 'zoektermen',
            placeholder: 'Waar bent u naar op zoek?',
          }}
        />,
      );

      const SearchBarInput = container.querySelector('.utrecht-search-bar__input');

      expect(SearchBarInput).toHaveAttribute('placeholder');
    });
  });
  describe('button', () => {
    it('renders a submit type element', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          button={{
            label: 'Zoeken',
          }}
        />,
      );

      const SearchBarInput = container.querySelector('button[type="submit"]');

      expect(SearchBarInput).toBeInTheDocument();
      expect(SearchBarInput).toBeVisible();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          button={{
            label: 'Zoeken',
          }}
        />,
      );

      const SearchBarInput = container.querySelector('button');

      expect(SearchBarInput).toHaveClass('utrecht-search-bar__button');
    });
    it('renders a button that contains text', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          button={{
            label: 'Search',
          }}
        />,
      );

      const button = container.querySelector('button');

      expect(button).toHaveTextContent('Search');
    });
  });
  describe('SearchBarDropdown ', () => {
    it('do not render a dropdown by default', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          button={{
            label: 'Zoeken',
          }}
        />,
      );
      const searchBarDropdown = container.querySelector('.utrecht-search-bar__popover');
      expect(searchBarDropdown).toBeFalsy();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          isOpen={true}
          button={{
            label: 'Zoeken',
          }}
        />,
      );
      const searchBarDropdown = container.querySelector('.utrecht-search-bar__popover');

      expect(searchBarDropdown).toBeInTheDocument();
    });
  });
  describe('SearchBar List', () => {
    it('do not render a list by default', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          button={{
            label: 'Zoeken',
          }}
        />,
      );
      const ul = container.querySelector('ul');

      expect(ul).not.toBeInTheDocument();
    });
    it('renders a listbox role element', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          isOpen={true}
          items={languages}
          button={{
            label: 'Zoeken',
          }}
        />,
      );
      const ul = container.querySelector('ul[role="listbox"]');

      expect(ul).toBeInTheDocument();
    });
  });
  describe('SearchBar List item', () => {
    it('do not render a list item by default', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          button={{
            label: 'Zoeken',
          }}
        />,
      );
      const li = container.querySelector('li');

      expect(li).not.toBeInTheDocument();
    });

    it('renders an option role element', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          isOpen={true}
          items={languages}
          button={{
            label: 'Zoeken',
          }}
        />,
      );
      const li = container.querySelector('li[role="option"]');
      expect(li).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          isOpen={true}
          items={languages}
          button={{
            label: 'Zoeken',
          }}
        />,
      );
      const li = container.querySelector('.utrecht-listbox__option');

      expect(li).toBeInTheDocument();
    });

    it('renders a design system selected BEM class name ', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          isOpen={true}
          items={languages}
          button={{
            label: 'Zoeken',
          }}
        />,
      );

      fireEvent(
        getByText(container, 'Javascript'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
      const selectedItem = container.querySelector('.utrecht-listbox__option--selected');
      expect(selectedItem).toBeInTheDocument();
      expect(selectedItem).toBeVisible();
    });

    it('renders a design system active BEM class name ', () => {
      const { container } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          isOpen={true}
          items={languages}
          defaultHighlightedIndex={1}
          button={{
            label: 'Zoeken',
          }}
        />,
      );

      const IsActiveElement = container.querySelector('li[aria-selected="true"]');

      expect(IsActiveElement).toBeInTheDocument();
      expect(IsActiveElement).toBeVisible();
    });
    describe('SearchBar Section', () => {
      it('renders a section element', () => {
        const { container } = render(
          <SearchBar
            itemToString={itemToStringHandler}
            isOpen={true}
            items={languages}
            button={{
              label: 'Zoeken',
            }}
          />,
        );

        const section = container.querySelector('section');
        expect(section).toBeInTheDocument();
        expect(section).toBeVisible();
      });
      it('renders a design system BEM class name', () => {
        const { container } = render(
          <SearchBar
            itemToString={itemToStringHandler}
            isOpen={true}
            items={languages}
            button={{
              label: 'Zoeken',
            }}
          />,
        );

        const section = container.querySelector('section');
        expect(section).toHaveClass('utrecht-listbox__group');
      });
      it('renders a section title', () => {
        const { container } = render(
          <SearchBar
            itemToString={itemToStringHandler}
            isOpen={true}
            items={languages}
            button={{
              label: 'Zoeken',
            }}
          />,
        );

        const sectionTitle = getByText(container, '1980s');
        expect(sectionTitle).toBeVisible();
        expect(sectionTitle).toBeInTheDocument();
      });
      it('renders a section title with the design system BEM class name', () => {
        const { container } = render(
          <SearchBar
            itemToString={itemToStringHandler}
            isOpen={true}
            items={languages}
            button={{
              label: 'Zoeken',
            }}
          />,
        );
        const sectionTitle = getByText(container, '1980s');
        expect(sectionTitle).toHaveClass('utrecht-listbox__group-label');
      });
      it('renders a section with children', () => {
        const { container } = render(
          <SearchBar
            itemToString={itemToStringHandler}
            isOpen={true}
            items={languages}
            button={{
              label: 'Zoeken',
            }}
          />,
        );

        const section = container.querySelector('section');
        const ul = section?.querySelector('ul');

        expect(section).toContainElement(ul as HTMLUListElement);
      });
    });
  });
  describe('SearchBar custom renderOptions', () => {
    it('should render custom options using renderOptions', () => {
      const customRenderOptions = (option: any) => <span>{option.name}</span>;

      const { queryByText } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          items={languages}
          input={{ placeholder: 'Search' }}
          button={{ label: 'Search' }}
          renderOptions={customRenderOptions}
          isOpen={true}
        />,
      );
      languages.forEach((option) => {
        const customOption = queryByText(option.title);
        expect(customOption).toBeInTheDocument();
      });
    });

    it('should use itemToString by default when renderOptions is not provided', () => {
      const { getByText } = render(
        <SearchBar
          itemToString={itemToStringHandler}
          items={languages}
          input={{ placeholder: 'Search' }}
          button={{ label: 'Search' }}
          isOpen={true}
        />,
      );

      const defaultOption1 = getByText('C++');
      const defaultOption2 = getByText('Javascript');

      expect(defaultOption1).toBeInTheDocument();
      expect(defaultOption2).toBeInTheDocument();
    });
  });
});
