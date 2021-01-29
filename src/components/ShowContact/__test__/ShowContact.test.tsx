import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";
import { rootReducer } from "../../../reducers";

import ShowContact from "../index";
import { Address } from "../../../actions/types";

afterEach(cleanup);

const contact: Address = {
  firstName: "Ernest",
  lastName: "Annor",
  houseNo: "123",
  streetName: "new street",
  locality: "wembley",
  country: "London",
  postCode: "ha9 2gm",
  postTown: "Middlesex",
  id: 0,
};

const match = {
  params: {
    id: 1,
  },
};

const store = createStore(rootReducer, applyMiddleware(thunk));

describe("When ShowContact Mounts", () => {
  test("Should Render successfully", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ShowContact contact={contact} match={match} />
      </Provider>
    );

    expect(getByTestId("contact")).toBeTruthy();
  });

  test("Matches snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ShowContact contact={contact} match={match} />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
