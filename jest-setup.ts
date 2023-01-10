import "@testing-library/jest-dom"

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
}));