import React from "react";
import { render, cleanup } from "@testing-library/react";
import AddressSuggestions from "../index";

afterEach(cleanup);

describe("When AddressSuggestion Mounts", () => {
  test("Should Render successfully with default props", () => {
    render(
      <AddressSuggestions suggestionResults={[]} getAddressId={() => {}} />
    );
  });
});
