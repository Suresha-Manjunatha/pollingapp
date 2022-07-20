import Home from "../src/Home";
import { fireEvent, render } from "@testing-library/react-native";

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe("home component test", () => {
  // jest.useFakeTimers();
  jest.setTimeout(10000);
  it("take snap shot", async () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
    expect(tree.getByTestId("home")).toBeTruthy();
    await new Promise((r) => setTimeout(r, 5000));
    expect(tree.getByTestId("home-list")).toBeTruthy();
    const list = tree.getByTestId("test-0");
    fireEvent.press(list);
  });
});
