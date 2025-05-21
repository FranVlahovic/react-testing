import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { afterEach, expect } from "vitest";

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Header text="hello" />);
    expect(asFragment()).toMatchSnapshot();
});

it("inserts text in h1", () => {
    const { getByTestId, getByText } = render(<Header text="hello two" />);

    expect(getByTestId('h1tag')).toHaveTextContent("hello two");
    expect(getByText("hello two")).toHaveClass("fancy-h1");
})