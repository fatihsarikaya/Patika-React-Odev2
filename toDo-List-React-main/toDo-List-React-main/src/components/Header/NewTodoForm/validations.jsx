import * as Yup from "yup";

let validations = Yup.object().shape({
  text: Yup.string().required("Bu alan Zorunlu"),
});

export default validations;
