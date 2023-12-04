import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialStore = {
  messageToUser: "",
  userInput: "",
  enableDarkMode: false,
};
export const actionTypes = {
  tellUserGoodbye: "TELL_USER_GOODBYE",
  tellUserHello: "TELL_USER_HELLO",
  tellUserWhatsUp: "TELL_USER_WHATS_UP",
  updateInputText: "UPDATE_INPUT_TEXT",
  displayUserInput: "DISPLAY_USER_INPUT",
  enableDarkMode: "ENABLE_DARK_MODE",
};

function reducer(prevState = initialStore, action) {
  switch (action.type) {
    case actionTypes.tellUserGoodbye:
      return { ...prevState, messageToUser: "Goodbye" };
    case actionTypes.tellUserHello:
      return { ...prevState, messageToUser: "Hello" };
    case actionTypes.tellUserWhatsUp:
      return { ...prevState, messageToUser: "Whats up!" };
    case actionTypes.updateInputText:
      return {
        ...prevState,
        userInput: action.payload,
      };
    case actionTypes.displayUserInput:
      return {
        ...prevState,
        messageToUser: prevState.userInput,
        userInput: "",
      };
    case actionTypes.enableDarkMode:
      return {
        ...prevState,
        enableDarkMode: !prevState.enableDarkMode,
      };
    default:
      return prevState;
  }
}
// DISPATCH the ACTIONS into the REDUCER to update the STATE/STORE
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
