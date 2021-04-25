import React from "react";
import MountainImage from "./MountainImage";

describe("MountainImage tests", () => {
  const props = {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Mt_si_and_meadowbrook_cows.jpg",
    title: "si mountain",
  };

  it("renders correctly", () => {
    const { container } = render(<MountainImage {...props} />);
    expect(container).toMatchSnapshot();
  });
});
