import { Dispatch } from "redux";
import {
  ADD_CONTACT,
  FETCH_CONTACT,
  FETCH_CONTACTS,
  EDIT_CONTACT,
  DELETE_CONTACT,
  Address,
} from "./types";
import { addressBook } from "../api/addressBook";
import history from "../components/history";

export const addContact = (formValues: Address) => async (
  dispatch: Dispatch
) => {
  const response = await addressBook.post("/addressBook", formValues);
  dispatch({ type: ADD_CONTACT, payload: response.data });
  console.log("add contact", formValues);
  history.push("/");
};

export const fetchContact = (id: number) => async (dispatch: Dispatch) => {
  const response = await addressBook.get(`/addressBook/${id}`);
  dispatch({
    type: FETCH_CONTACT,
    payload: response.data,
  });
};

export const editContact = (id: number) => async (dispatch: Dispatch) => {
  const response = await addressBook.get(`/addressBook/${id}`);
  dispatch({
    type: EDIT_CONTACT,
    payload: response.data,
  });
};

export const deleteContact = (id: any) => async (dispatch: Dispatch) => {
  await addressBook.get(`/addressBook/${id}`);
  dispatch({ type: DELETE_CONTACT, payload: id });
};

export const fetchContacts = () => async (dispatch: Dispatch) => {
  const response = await addressBook.get("/addressBook");
  dispatch({
    type: FETCH_CONTACTS,
    payload: response.data,
  });
};
