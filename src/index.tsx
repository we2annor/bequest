import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./app-component";
import { store } from "./store";
import "./assets/css/styles.css";

const root = document.querySelector("#root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
