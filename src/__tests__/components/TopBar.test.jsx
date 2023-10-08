import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TopBar from "../../components/TopBar";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("TopBar compnent", () => {
  test("render container and TopBar", () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("BLOG"));
    expect(mockUseNavigate).toBeCalledWith("/");

    const navLink = screen.getByText("Contato");
    expect(navLink.getAttribute("href")).toBe("/contato");

    expect(screen.getByTestId("topBar")).toBeInTheDocument();
  });

  test("BLOG button should navigate to home", () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("BLOG"));
    expect(mockUseNavigate).toBeCalledWith("/");
  });

  test("Contact link should have path to contact", () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    );

    const navLink = screen.getByText("Contato");
    expect(navLink.getAttribute("href")).toBe("/contato");
  });

  test("Contact link should have active style", () => {
    render(
      <MemoryRouter initialEntries={["/contato"]}>
        <TopBar />
      </MemoryRouter>
    );

    const navLink = screen.getByText("Contato");
    expect(navLink.getAttribute("style")).toBe(
      "font-size: 16px; font-weight: 600; text-decoration: underline; color: rgb(255, 255, 255);"
    );
  });

  test("Contact link should not have active style", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <TopBar />
      </MemoryRouter>
    );

    const navLink = screen.getByText("Contato");
    expect(navLink.getAttribute("style")).toBe(
      "font-size: 16px; font-weight: 400; text-decoration: none; color: rgb(255, 255, 255);"
    );
  });
});
