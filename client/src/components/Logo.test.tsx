import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Logo from "./Logo";

describe("Logo Component", () => {
  test("renders a message", () => {
    const { getByText } = render(<Logo />);
    expect(getByText("Microsoft Teams")).toBeInTheDocument();
  });
});
