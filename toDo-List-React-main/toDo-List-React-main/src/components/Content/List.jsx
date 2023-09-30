import { useContext } from "react";
import TodoContext from "../context/TodoContext";

let filtered = null;

function List() {
  let { todos, setTodos, filter } = useContext(TodoContext);

  //filter işlemi

  filtered = todos;
  if (filter !== "all") {
    filtered = todos.filter((todo) =>
      filter === "active" ? todo.completed === false : todo.completed === true
    );
  }
  //filter işlemi

  // checkbox işlemleri
  let onChange = (id) => {
    let clone_todos = [...todos];

    let item_index = clone_todos.findIndex((todo) => todo.id === id);
    let item = todos[item_index];
    item.completed = !item.completed;
    setTodos(clone_todos);
  };
  // checkbox işlemleri

  //silme işlemi

  let onDestroy = (id) => {
    let clone_todos = [...todos];
    let item_index = clone_todos.findIndex((todo) => todo.id === id);
    clone_todos.splice(item_index, 1);
    setTodos(clone_todos);
  };

  // silme işlemi
  return (
    <div>
      <ul className="todo-list">
        {filtered.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="view">
              <input
                onChange={() => onChange(todo.id)}
                className="toggle"
                type="checkbox"
                checked={todo.completed}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => onDestroy(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
