import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../../../reducers";
import AddressForm from "../index";
import { InitialAddressValues } from "../../../actions/types";

import renderer from "react-test-renderer";

afterEach(cleanup);

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return { ...render(<Provider store={store}>{component}</Provider>) };
};

describe("AddressForm", () => {
  test("renders with default props", () => {
    //const store = createStore(rootReducer, applyMiddleware(thunk));
    const { getByTestId, getByRole, getAllByRole, queryAllByText, getByText } = renderWithRedux(
      <AddressForm selectedAddress={InitialAddressValues} postcode='ha9 8rf' />
    );
    expect(getByTestId("contact-form")).toBeTruthy();
    expect(getByTestId('heading-2')).toBeInTheDocument();
    expect(getByRole('heading')).toHaveTextContent('Add address manually');
    expect(getAllByRole('textbox')).toHaveLength(8);
    expect(getAllByRole('button')).toHaveLength(2);
    expect(getByText('Submit')).toBeInTheDocument();
    expect(queryAllByText('Clear')).toHaveLength(1)
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
