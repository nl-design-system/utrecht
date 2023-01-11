// Cleaning elements, because of a TestBed issue with the id attribute
export const clearElements = () =>
  Array.from(document.body.children).map(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
