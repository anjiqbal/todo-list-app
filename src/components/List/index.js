import ListItem from "../ListItem";

function List({ toDoList, removeToDo }) {
  return (
    <ul>
      {toDoList.map((toDoText) => {
        return <ListItem removeToDo={removeToDo} toDoText={toDoText} />;
      })}
    </ul>
  );
}

export default List;
