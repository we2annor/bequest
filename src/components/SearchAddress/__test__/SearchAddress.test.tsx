import React from "react";
import { render, cleanup } from "@testing-library/react";
import SearchAddress from "../SearchAddress";

afterEach(cleanup);

describe("When SearchAddress Mounts", () => {
  test("Should render successfully", () => {
    const { getByTestId } = render(<SearchAddress getSearchTerm={() => {}} />);
    expect(getByTestId("address-search")).toBeTruthy();
  });
});
