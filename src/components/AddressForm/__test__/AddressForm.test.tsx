import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../../../reducers";
import AddressForm from "../index";
import { InitialAddressValues } from "../../../actions/types";

import renderer from "react-test-renderer";

afterEach(cleanup);

describe("AddressForm", () => {
  test("renders with default props", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    render(
      <Provider store={store}>
        <AddressForm
          selectedAddress={InitialAddressValues}
          postcode={"ha9 8rf"}
        />
      </Provider>
    );
  });

  test("Matches snapshot", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const tree = renderer
      .create(
        <Provider store={store}>
          <AddressForm
            selectedAddress={InitialAddressValues}
            postcode={"ha9 8rf"}
          />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
