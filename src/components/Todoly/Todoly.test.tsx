import { render, screen } from "@testing-library/react";
import Todoly from "./Todoly";

test("renders learn react link", () => {
  const { getByText } = render(<Todoly />);

  expect(getByText("Todoly")).toBeInTheDocument();
});
