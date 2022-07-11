import Home from "../src/Home";
import { render } from "@testing-library/react-native";
import Details from "../src/Details";
import App from "../App";

describe("home component test", () => {
  jest.useFakeTimers();
  it("take snap shot", () => {
    render(<Details />);
  });
  it("test for app componet", () => {
    render(<App />);
  });
});
