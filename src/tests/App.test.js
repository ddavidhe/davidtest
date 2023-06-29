import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {

  it("renders the home page correctly", () => {
    render(<App />);
    
    const fruitsPageContent = screen.getByText("Snack Track");
    expect(fruitsPageContent).toBeInTheDocument();
  });

  it("renders the fruits page correctly", () => {
    render(<App />);
    
    const fruitsPageContent = screen.getByText("Fruits");
    expect(fruitsPageContent).toBeInTheDocument();
  });
    
  it("renders the vegetables page correctly", () => {
    render(<App />);
    
    const vegetablesPageContent = screen.getByText("Vegetables");
    expect(vegetablesPageContent).toBeInTheDocument();
  });

  it("renders the grains page correctly", () => {
    render(<App />);

    const grainsPageContent = screen.getByText("Grains");
    expect(grainsPageContent).toBeInTheDocument();
  });
  
  it("renders the dairy page correctly", () => {
    render(<App />);

    const dairyPageContent = screen.getByText("Dairy");
    expect(dairyPageContent).toBeInTheDocument();
  });
    
  it("renders the meat page correctly", () => {
    render(<App />);
    
    const meatPageContent = screen.getByText("Meat and Alternatives");
    expect(meatPageContent).toBeInTheDocument();
  });
    
});
