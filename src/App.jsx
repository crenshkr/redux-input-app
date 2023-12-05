import "./App.css";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";

import { actionTypes } from "./main";

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);

  const userMessages = useSelector((state) => state.messageToUser);

  const updatedMessage = useSelector((state) => state.userInput);

  const enableDarkMode = useSelector((state) => state.enableDarkMode);

  const dispatch = useDispatch();

  const signIn = (username, password) => ({
    type: actionTypes.signIn,
    payload: { username, password },
  });

  const signOut = () => ({
    type: actionTypes.signOut,
  });

  function handleSignIn() {
    dispatch(signIn("khalil", "1"));
  }
  const handleSignOut = () => {
    dispatch(signOut());
  };

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
      {isAuthenticated ? (
        <div>
          <div>
            <h2>Welcome, {user.username}!</h2>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>

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
        </div>
      ) : (
        <div>
          <h2>Sign In</h2>
          <input type="text" value="khalil" placeholder="Username" />

          <br />
          <input type="password" value="1" placeholder="password" />

          <br />
          <button onClick={handleSignIn} disabled={isAuthenticated}>
            Sign In
          </button>
        </div>
      )}
    </>
  );
}

export default App;
