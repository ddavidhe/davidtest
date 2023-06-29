import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HomeButton from "../components/HomeButton"

describe("HomeButton", () => {
  it("should render children and text correctly", () => {
    const { getByText } = render(
      <HomeButton text="Click Me" color="bg-gray-600">
        <span>Button Icon</span>
      </HomeButton>
    );

    const button = getByText("Button Icon");
    const buttonText = getByText("Click Me");

    expect(button).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });

  it("should display text upon hover", () => {
    const { getByText, queryByText } = render(
      <HomeButton text="Click Me" color="bg-blue-500">
        <span>Button Icon</span>
      </HomeButton>
    );

    const button = getByText("Button Icon");
    const textElement = getByText("Click Me");

    fireEvent.mouseEnter(button);

    expect(queryByText("Click Me")).toBeInTheDocument();
  });
});
