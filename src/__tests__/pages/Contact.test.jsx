import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../../pages/Contact";

describe("Contact component", () => {
  test("send button should be disabled if form is not valid", () => {
    render(<Contact />);

    expect(screen.getByText("Enviar")).toHaveAttribute("disabled");
  });

  test("send button should not be disabled if form is valid", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const { name, email, message, isHuman } = defaultFormDataValues;
    fillForm(name, email, message, isHuman);

    expect(screen.getByText("Enviar")).not.toHaveAttribute("disabled");
  });

  test("should make a successful request with form data values when click on send data", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
      })
    );

    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const { name, email, message, isHuman } = defaultFormDataValues;
    fillForm(name, email, message, isHuman);

    fireEvent.click(screen.getByText("Enviar"));

    await waitFor(() =>
      expect(fetch).toBeCalledWith(
        "https://fast-react-api.onrender.com/contact",
        {
          method: "post",
          headers: [
            ["Accept", "application/json"],
            ["Content-Type", "application/json"],
          ],
          body: JSON.stringify(defaultFormDataValues),
        }
      )
    );
  });

  test("should make a unsuccessful request with form data values when click on send data", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const { name, email, message, isHuman } = defaultFormDataValues;
    fillForm(name, email, message, isHuman);

    fireEvent.click(screen.getByText("Enviar"));

    await waitFor(() =>
      expect(fetch).toBeCalledWith(
        "https://fast-react-api.onrender.com/contact",
        {
          method: "post",
          headers: [
            ["Accept", "application/json"],
            ["Content-Type", "application/json"],
          ],
          body: JSON.stringify(defaultFormDataValues),
        }
      )
    );
  });

  test("should make a unsuccessful request with form data values when click on send data 2", async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error("...")));

    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const { name, email, message, isHuman } = defaultFormDataValues;
    fillForm(name, email, message, isHuman);

    fireEvent.click(screen.getByText("Enviar"));

    await waitFor(() =>
      expect(fetch).toBeCalledWith(
        "https://fast-react-api.onrender.com/contact",
        {
          method: "post",
          headers: [
            ["Accept", "application/json"],
            ["Content-Type", "application/json"],
          ],
          body: JSON.stringify(defaultFormDataValues),
        }
      )
    );
  });
});

const defaultFormDataValues = {
  name: "rayann",
  email: "rncsn@cesar.org.br",
  message: "mensagem...",
  isHuman: true,
};

const fillForm = (name, email, message, isHuman) => {
  const nameInput = screen.getByTestId("nameInput");
  fireEvent.change(nameInput, {
    target: {
      value: name,
    },
  });

  const emailInput = screen.getByTestId("emailInput");
  fireEvent.change(emailInput, {
    target: {
      value: email,
    },
  });

  const messageInput = screen.getByTestId("messageInput");
  fireEvent.change(messageInput, {
    target: {
      value: message,
    },
  });

  if (isHuman) {
    const isHumanInput = screen.getByTestId("isHumanInput");
    fireEvent.click(isHumanInput);
  }
};
