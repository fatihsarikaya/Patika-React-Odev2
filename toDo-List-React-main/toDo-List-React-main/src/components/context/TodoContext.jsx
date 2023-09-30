import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
let TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  let [filter, setFilter] = useState("all");
  let [todos, setTodos] = useState([
    {
      id: 1,
      text: "Ödevi Yap",
      completed: true,
    },
  ]);

  let addTodo = (text) =>
    setTodos((prev) => [...prev, { id: uuidv4(), completed: false, text }]);

  let toogleTodo = (id) => {
    let clone_todos = [...todos];
    let item_index = clone_todos.findIndex((todo) => todo.id === id);
    let item = todos[item_index];
    item.completed = !item.completed;
    setTodos(clone_todos);
  };

  let values = {
    todos,
    setTodos,
    addTodo,
    toogleTodo,
    filter,
    setFilter,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContext;
