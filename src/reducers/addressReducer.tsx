import _ from "lodash";
import {
  ADD_CONTACT,
  FETCH_CONTACT,
  FETCH_CONTACTS,
  EDIT_CONTACT,
  //DELETE_CONTACT,
  AddressesState,
  AddressBookActionTypes,
} from "../actions/types";

const initialState : AddressesState = Object({})

export const addressReducer = (
  state = initialState,
  action: AddressBookActionTypes
): AddressesState => {
  switch (action.type) {
    case FETCH_CONTACT:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_CONTACTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case ADD_CONTACT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_CONTACT : 
      return {...state, [action.payload.id]: action.payload};
    //case DELETE_CONTACT: 
      //return _.omit(state, action.payload);
    default:
      return state;
  }
};
