import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import Error from "../index";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("On Mount", () => {
  test("Renders without crushing", () => {
    const div = document.createElement("div");
    const message = "";
    ReactDOM.render(<Error message={message}></Error>, div);
  });

  test("Renders correctly", () => {
    const message = "Error occured";
    const { getByTestId } = render(<Error message={message} />);
    expect(getByTestId("error").textContent).toBe("Error occured");
  });

  test("Render correctly with a different message", () => {
    const message = "Failed to load the api";
    const { getByTestId } = render(<Error message={message} />);
    expect(getByTestId("error").textContent).toBe("Failed to load the api");
  });

  test("Matches a snapshot", () => {
    const tree = renderer.create(<Error message={"Error occured"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Maches another snapshot", () => {
    const tree = renderer
      .create(<Error message='Failed to load the api' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
