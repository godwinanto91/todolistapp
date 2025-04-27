import React from "react";
import { render } from "@testing-library/react";
import { CustomSpinner } from ".";


describe("Spinner component", () => {
  it("renders with provided props", () => {
    const { getByRole, getByText } = render(
      <CustomSpinner color="primary" role="status" srText="Loading..." />
    );

    const spinner = getByRole("status");
    const srText = getByText("Loading...");

    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass("spinner-border text-primary");
    expect(srText).toBeInTheDocument();
  });
});
