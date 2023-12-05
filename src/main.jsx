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
  isAuthenticated: false,
  user: null,
};
export const actionTypes = {
  tellUserGoodbye: "TELL_USER_GOODBYE",
  tellUserHello: "TELL_USER_HELLO",
  tellUserWhatsUp: "TELL_USER_WHATS_UP",
  updateInputText: "UPDATE_INPUT_TEXT",
  displayUserInput: "DISPLAY_USER_INPUT",
  enableDarkMode: "ENABLE_DARK_MODE",
  signIn: "SIGN_IN",
  signOut: "SIGN_OUT",
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
    case actionTypes.signIn:
      if (
        action.payload.username === "khalil" &&
        action.payload.password === "1"
      )
        return {
          ...prevState,
          isAuthenticated: true,
          user: { username: action.payload.username },
        };

      break;

    case "SIGN_OUT":
      return {
        ...prevState,
        isAuthenticated: false,
        user: null,
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
