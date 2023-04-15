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
    setToDoList([...toDoList.slice(0, index), ...toDoList.slice(index + 1)]);
  }

  return (
    <main className="App">
      <Input addToDo={addToDo} />
      <List toDoList={toDoList} removeToDo={removeToDo} />
    </main>
  );
}

export default App;
