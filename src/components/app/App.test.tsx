import { render, screen } from "@testing-library/react";
import App from "../app/App";

describe("Given the App function", () => {
  describe("When we call this function", () => {
    test("renders learn react link", () => {
      render(<App />);
      const h1 = screen.getByText(/The pointing gentlemen/i);
      expect(h1).toBeInTheDocument();
    });
  });
});
