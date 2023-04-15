import { useState } from "react";

function Input({ addToDo }) {
  const [text, setText] = useState("");

  function handleText(inputText) {
    setText(inputText);
  }

  return (
    <section>
      <input
        type="text"
        onChange={(event) => {
          handleText(event.target.value);
        }}
      />
      <button
        onClick={() => {
          addToDo(text);
          document.querySelector("input").value = "";
        }}
      >
        Add ToDo
      </button>
    </section>
  );
}

export default Input;
