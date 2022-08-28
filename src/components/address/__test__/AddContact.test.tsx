import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";
import { rootReducer } from "../../../reducers";
import AddContact from "../address-component";

afterEach(cleanup);

describe("When AddContact Component Mounts", () => {
  test("should Mount successfully", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    render(
      <Provider store={store}>
        <AddContact />
      </Provider>
    );
  });

  test("Maches snapshop", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const tree = renderer.create(
      <Provider store={store}>
        <AddContact />
      </Provider>
    );

    expect(tree).toMatchSnapshot();
  });
});
