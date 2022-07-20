import Home from "../src/Home";
import { render } from "@testing-library/react-native";
import Details from "../src/Details";
import App from "../App";

const route = {
  params: {
    item: "",
  },
};

describe("home component test", () => {
  jest.useFakeTimers();
  it("take snap shot", () => {
    const tree = render(<Details route={route} />);
    expect(tree).toMatchSnapshot();
  });
});
