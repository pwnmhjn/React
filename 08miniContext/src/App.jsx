import "./App.css";
import Login from "./Components/Login.jsx";
import Profile from "./Components/Profile.jsx";
import UserContextProvider from "./Context/UserContextProvider.jsx";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Hi 💕👌pwnmhjn</h1>
        <Login />
        <br />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
