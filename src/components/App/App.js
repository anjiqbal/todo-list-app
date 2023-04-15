import "./App.css";
import { useState } from "react";
import Input from "../Input";
import List from "../List";

function App() {
  const [toDoList, setToDoList] = useState([]);

  function addToDo(text) {
    setToDoList([...toDoList, text]);
  }

  function removeToDo(index) {
    return false;
  }

  return (
    <main className="App">
      <Input addToDo={addToDo} />
      <List toDoList={toDoList} removeToDo={removeToDo} />
    </main>
  );
}

export default App;
