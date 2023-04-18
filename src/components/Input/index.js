import { useState } from "react";

function Input({ addToDo }) {
  const [text, setText] = useState("");

  function handleText(inputText) {
    setText(inputText);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      console.log("hello");
      addToDo(text);
      document.querySelector("input").value = "";
    }
  }

  return (
    <section>
      <input
        type="text"
        onChange={(event) => {
          handleText(event.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={() => {
          addToDo(text);
          document.querySelector("input").value = "";
        }}
      >
        Add Task
      </button>
    </section>
  );
}

export default Input;
