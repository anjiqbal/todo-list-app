function ListItem({ toDoText, removeToDo, index }) {
  return (
    <section>
      <li>
        {toDoText}
        <button onClick={() => removeToDo(index)}>X</button>
      </li>
    </section>
  );
}

export default ListItem;
