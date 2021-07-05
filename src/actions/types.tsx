export const ADD_CONTACT = "ADD_CONTACT";
export const FETCH_CONTACTS = "FETCH_CONCTACTS";
export const FETCH_CONTACT = "FETCH_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";

export interface AddressesState {
  addressBook: Address;
}

export interface Address {
  line1: string;
  line2: string;
  line3: string;
  locality: string;
  townCity: string;
  county: string;
  country: string;
  postCode: string;
  id: number;
}

interface ID {
  id: number;
}

export type AddressKey = keyof Address;

export const InitialAddressValues = {
  line1: "",
  line2: "",
  line3: "",
  country: "",
  locality: "",
  townCity: "",
  county: "",
  postCode: "",
  id: 0,
};

export interface AddressFormProps {
  selectedAddress: string;
  postcode: string;
  addContact: (formValues: Address) => void;
  hideAddAddressManuallyForms: () => void;
}

export interface AddNewContact {
  type: typeof ADD_CONTACT;
  payload: Address;
}

export interface FetchContact {
  type: typeof FETCH_CONTACT;
  payload: Address;
}

export interface FetchContacts {
  type: typeof FETCH_CONTACTS;
  payload: Address;
}

export interface EditContact {
  type: typeof EDIT_CONTACT;
  payload: Address;
}

export interface DeleteContact {
  type: typeof DELETE_CONTACT;
  payload: ID;
}

export type AddressBookActionTypes =
  | AddNewContact
  | FetchContact
  | FetchContacts
  | EditContact
  | DeleteContact;
