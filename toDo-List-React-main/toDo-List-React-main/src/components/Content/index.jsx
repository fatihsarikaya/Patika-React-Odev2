import {} from "react";
import ContentFooter from "../ContentFooter";
import List from "./List";
function Content() {
  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <List></List>
      </section>
      <ContentFooter></ContentFooter>
    </div>
  );
}

export default Content;
