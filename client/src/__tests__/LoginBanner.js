import React from "react";
import { render } from "@testing-library/react";
import LoginBanner from "../componenets/LoginBanner";

describe("LoginBanner component", () => {
  it("should render the correct text", () => {
    const { getByText } = render(<LoginBanner />);

    expect(getByText("Surge Internship").textContent).toBe("Surge Internship");
    expect(getByText("March 2023").textContent).toBe(" March 2023");
    expect(getByText("Shehan Chanuka Dharmapriya").textContent).toBe(
      "Shehan Chanuka Dharmapriya"
    );
  });
});
