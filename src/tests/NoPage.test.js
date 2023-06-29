import React from "react";
import { render } from "@testing-library/react";
import NoPage from "../components/NoPage";

describe("NoPage", () => {
  it("should render the error message correctly", () => {
    const { getByText } = render(<NoPage />);
    const errorMessage = getByText("ERROR 404: Page Does Not Exist");
    expect(errorMessage).toBeInTheDocument();
  });
});
