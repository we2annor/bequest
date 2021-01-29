import React from "react";
import { act, render } from "@testing-library/react";
import App from "../../components/App";

describe("When rendered", () => {
  test("should render App successfully", async () => {
    await act(async () => {
      await render(<App />);
    });
  });
});
