import { useContext } from "react";
import TodoContext from "./context/TodoContext";

function ContentFooter() {
  let { todos, setTodos, filter, setFilter } = useContext(TodoContext);

  // komple silme işlemi

  let clearCompleted = () => {
    let klon_todos = [...todos];
    let yeni_todos = klon_todos.filter((todo) => !todo.completed);
    setTodos(yeni_todos);
  };
  // komple silme işlemi

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.length} </strong>
          item{todos.length > 1 && "s"} left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              onClick={() => setFilter("all")}
              className={filter === "all " ? "selected" : ""}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => setFilter("active")}
              className={filter === "active " ? "selected" : ""}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => setFilter("completed")}
              className={filter === "completed " ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default ContentFooter;
