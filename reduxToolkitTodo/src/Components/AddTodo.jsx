import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const handelAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handelAddTodo}>Add-Todo</button>
      </form>
    </>
  );
}

export default AddTodo;
