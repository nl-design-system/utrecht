window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false, // Adjust this based on your test case
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});
