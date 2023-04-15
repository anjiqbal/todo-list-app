function ListItem({ toDoText, removeToDo }) {
  return (
    <section>
      <li>
        {toDoText}
        <button>X</button>
      </li>
    </section>
  );
}

export default ListItem;
