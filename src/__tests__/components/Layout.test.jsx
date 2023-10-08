import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout";

describe("Layout compnent", () => {
  test("render container and TopBar", () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    expect(screen.getByTestId("layoutContainer")).toBeInTheDocument();
    expect(screen.getByTestId("topBar")).toBeInTheDocument();
  });
});
