import "./App.css";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { actionTypes } from "./main";

function App() {
  const userMessages = useSelector((state) => state.messageToUser);

  const updatedMessage = useSelector((state) => state.userInput);

  const enableDarkMode = useSelector((state) => state.enableDarkMode); // Corrected line

  const dispatch = useDispatch();

  function goodbyeMessage(event) {
    dispatch({ type: actionTypes.tellUserGoodbye });
    console.log(event);
  }
  function helloMessage() {
    dispatch({ type: actionTypes.tellUserHello });
  }
  function whatsMessage() {
    dispatch({ type: actionTypes.tellUserWhatsUp });
  }
  function displayUserInput(e) {
    e.preventDefault();
    dispatch({ type: actionTypes.displayUserInput });
  }
  function toggleDarkMode() {
    dispatch({ type: actionTypes.enableDarkMode });
  }

  return (
    <>
      <div className={enableDarkMode ? "dark-mode" : "light-mode"}>
        <button
          className={enableDarkMode ? "btn-dark-mode" : "btn-light-mode"}
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
        <h1>{enableDarkMode ? "dark-mode" : "light-mode"}</h1>
        <p>Message: {userMessages}</p>
        <button
          className={enableDarkMode ? "btn-dark-mode" : "btn-light-mode"}
          onClick={goodbyeMessage}
        >
          Say Goodbye
        </button>
        <button
          className={enableDarkMode ? "btn-dark-mode" : "btn-light-mode"}
          onClick={helloMessage}
        >
          Say Hello
        </button>
        <button
          className={enableDarkMode ? "btn-dark-mode" : "btn-light-mode"}
          onClick={whatsMessage}
        >
          Say Whats Up
        </button>
        <form>
          <input
            type="text"
            value={updatedMessage}
            onChange={(e) =>
              dispatch({
                type: actionTypes.updateInputText,
                payload: e.target.value,
              })
            }
          ></input>
          <button
            className={enableDarkMode ? "btn-dark-mode" : "btn-light-mode"}
            onClick={displayUserInput}
          >
            Update Message
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
