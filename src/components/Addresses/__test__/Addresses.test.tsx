import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";
import { rootReducer } from "../../../reducers";
import Address from "../index";

afterEach(cleanup);

describe("When Address Mounts", () => {
  test("Renders successfully", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    render(
      <Provider store={store}>
        <Address />
      </Provider>
    );
  });

  test("Matches snapshot", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const tree = renderer.create(
      <Provider store={store}>
        <Address />
      </Provider>
    );

    expect(tree).toMatchSnapshot();
  });
});
