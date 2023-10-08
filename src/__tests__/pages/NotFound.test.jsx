import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NotFound from "../../pages/NotFound";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("NotFound compnent", () => {
  test("render container and TopBar", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByLabelText("home"));

    expect(screen.getByTestId("notFound")).toBeInTheDocument();
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Página não encontrada")).toBeInTheDocument();
    expect(mockUseNavigate).toBeCalledWith("/");
  });
});
