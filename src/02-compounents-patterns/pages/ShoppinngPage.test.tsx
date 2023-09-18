import { render, screen, fireEvent } from "@testing-library/react";
import { ShoppinngPage } from "./ShoppinngPage";

describe("ShoppinngPage", () => {
  test("renders shopping page title", () => {
    render(<ShoppinngPage />);
    const titleElement = screen.getByText(/shopping page/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders product cards", () => {
    render(<ShoppinngPage />);
    const productCards = screen.getAllByRole("article");
    expect(productCards.length).toBe(2);
  });

  test("adds product to shopping cart when count is increased", () => {
    render(<ShoppinngPage />);
    const addButton = screen.getAllByRole("button", { name: /add/i })[0];
    fireEvent.click(addButton);
    const cartCount = screen.getByTestId("cart-count");
    expect(cartCount.textContent).toBe("1");
  });

  test("removes product from shopping cart when count is decreased to 0", () => {
    render(<ShoppinngPage />);
    const addButton = screen.getAllByRole("button", { name: /add/i })[0];
    const removeButton = screen.getAllByRole("button", { name: /remove/i })[0];
    fireEvent.click(addButton);
    fireEvent.click(removeButton);
    const cartCount = screen.getByTestId("cart-count");
    expect(cartCount.textContent).toBe("0");
  });
});
