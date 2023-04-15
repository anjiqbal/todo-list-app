import ListItem from "../ListItem";

function List({ toDoList, removeToDo }) {
  return (
    <ul>
      {toDoList.map((toDoText, index) => {
        return (
          <ListItem removeToDo={removeToDo} toDoText={toDoText} index={index} />
        );
      })}
    </ul>
  );
}

export default List;
