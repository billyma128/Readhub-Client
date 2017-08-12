
/* global jest fetch */

jest.mock('Linking', () =>
({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.fn(),
  canOpenURL: jest.fn(
    () => new Promise(resolve => resolve(true)),
  ),
  getInitialURL: jest.fn(),
}),
);

jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'));

jest.mock('react-native-device-info', () => ({
  getVersion: jest.fn(),
}));

// Mocking the global.fetch included in React Native
global.fetch = jest.fn(
  () => new Promise(resolve => resolve(true)),
);

// Helper to mock a success response (only once)
fetch.mockResponseSuccess = (body) => {
  fetch.mockImplementationOnce(
    () => Promise.resolve({ json: () => Promise.resolve(JSON.parse(body)) }),
  );
};

// Helper to mock a failure response (only once)
fetch.mockResponseFailure = (error) => {
  fetch.mockImplementationOnce(
    () => Promise.reject(error),
  );
};
