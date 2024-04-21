import Card from "./Card";
import "./App.css";

function App() {
  let myObj = {
    username: "pawan",
    age: 25,
  };
  return (
    <>
      <Card name="Amila" />
      <Card name="Sansa" />
    </>
  );
}

export default App;
