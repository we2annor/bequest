import { useCallback, useReducer } from "react";

const initialState = {
  status: null,
  data: null,
  error: null,
};

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { status: "pending", data: null, error: null };
    case "SUCCESS":
      return { status: "complete", data: action.responseData, error: null };
    case "ERROR":
      return { status: "completed", data: null, error: action.errorMessage };
    default:
      return state;
  }
};

export const useHttpRequest = (requestFunction) => {
  const [httpState, dispatch] = useReducer(httpReducer, initialState);

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "SEND" });
      try {
        const response = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", response });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong",
        });
      }
    },
    [requestFunction]
  );

  return { sendRequest, ...httpState };
};
