import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Router } from "react-router-dom";
import history from "../../history";
import Navigation from "../index";

afterEach(cleanup);

describe("When Navigation Mounts", () => {
  test("Should render successfully", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Navigation />
      </Router>
    );
    expect(getByTestId("navigation")).toBeTruthy();
  });
});
