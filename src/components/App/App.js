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
      <h1>To Do List</h1>
      <div className="input-wrapper">
        <Input addToDo={addToDo} />
      </div>
      <List toDoList={toDoList} removeToDo={removeToDo} />
    </main>
  );
}

export default App;
