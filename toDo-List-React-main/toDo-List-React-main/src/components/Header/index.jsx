import {} from "react";
import NewTodoForm from "./NewTodoForm";

function Header() {
  return (
    <header className="header">
      <h1>toDo APP</h1>
      <NewTodoForm></NewTodoForm>
    </header>
  );
}

export default Header;
