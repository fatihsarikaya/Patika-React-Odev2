import { useContext } from "react";
import { Formik, Form, Field } from "formik";
import ValidationSchema from "./validations";
import TodoContext from "../../context/TodoContext";

function NewTodoForm() {
  let { addTodo } = useContext(TodoContext);
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={async (values, bag) => {
        console.log(values);

        addTodo(values.text);

        bag.resetForm();
      }}
      validationSchema={ValidationSchema}
    >
      <Form>
        <Field
          type="text"
          className="new-todo"
          placeholder="Ne Yapacaksın ?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
}

export default NewTodoForm;
