import React from "react";
import ContactSuccess from "./ContactSuccess";

describe("ContactSuccess tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ContactSuccess  />);
    expect(container).toMatchSnapshot();
  });
});