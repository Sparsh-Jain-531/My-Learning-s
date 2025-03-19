import { useForm } from "react-hook-form";

function App() {
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => console.log("Form Data:", data);

  return (
    <>
      {isSubmitting && <div>Submitting...</div>}

      <form action="" onSubmit={handleSubmit(onSubmit)}>

        <input
          placeholder="username"
          {...register("username", {
            required: { value: true, message: "This field is required" },
            minLength: { value: 3, message: "Min length is 3" },
            maxLength: { value: 8, message: "Max length is 8" },
          })}
          type="text"
        />

        {errors.username && (
          <div className="red">{errors.username.message}</div>
        )}

        <br />

        <input
          {...register("email", {
            required: "Email is required",
            pattern: /^\S+@\S+$/i,
          })}
          placeholder="Email"
          type="emal"
        />

        {errors.email && <div>Valid email is required</div>}
        
        <br />

        <input
          placeholder="password"
          {...register("password", {
            minLength: { value: 7, message: "Min length of password is 7" },
          })}
          type="password"
        />

        {errors.password && (
          <div className="red">{errors.password.message}</div>
        )}

        <br />

        <input disabled={isSubmitting} type="submit" value="Submit" />

      </form>
    </>
  );
}

export default App;
