import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SideNavBar from "../componenets/SideNavBar";

describe("SideNavBar", () => {
  it("renders the logo", () => {
    const { getByAltText } = render(<SideNavBar />);
    const logo = getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("opens and closes the drawer when the menu button is clicked", () => {
    const { getByLabelText, queryByLabelText } = render(<SideNavBar />);
    const menuButton = getByLabelText("menu");
    fireEvent.click(menuButton);
    expect(queryByLabelText("close")).toBeInTheDocument();

    const closeButton = getByLabelText("close");
    fireEvent.click(closeButton);
    expect(queryByLabelText("close")).not.toBeInTheDocument();
  });
});
