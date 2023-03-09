import { useFormik } from "formik";

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
    </form>
  );
}
export default LoginForm;
