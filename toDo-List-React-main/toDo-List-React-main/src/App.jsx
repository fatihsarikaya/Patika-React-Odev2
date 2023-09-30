import {} from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { TodoProvider } from "./components/context/TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <section className="todoapp">
          <Header></Header>
          <Content></Content>
        </section>
        <Footer></Footer>
      </TodoProvider>
    </>
  );
}

export default App;
