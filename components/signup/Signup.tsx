import React from "react";
import styles from "../../styles/signin/signin.module.scss";
import inputStyles from "../../styles/input/input.module.scss";
import buttonStyles from "../../styles/button/button.module.scss";
import { useForm } from "react-hook-form";
import * as EmailValidator from "email-validator";
import { useMutation } from "react-query";
import axios from "axios";
import { useAuth, Auth } from "../../context/auth";
import { useRouter } from "next/router";
import { url } from "../../util/url";

interface AppProps {
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
}
interface AppProps {
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signup = ({ setSignin }: AppProps) => {
  const { dispatch } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation(
    (data) =>
      axios.post(`${url}/auth/signup`, data, {
        withCredentials: true,
      }),
    {
      onSuccess: (res) => {
        const { token, userInitials } = res.data as Auth;
        const payload = { token, userInitials };
        localStorage.setItem("x-credentials", token);
        dispatch({ type: "signup", payload });
        router.push("/news-feed");
      },
    }
  );

  const onSubmit = (data) => mutate(data);
  return (
    <div className={styles.container}>
      <h3>Sign up</h3>
      <form
        className={styles.form__container}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className={inputStyles.input}
          placeholder="First name"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <span className={styles.error}>first name is required</span>
        )}
        <input
          type="text"
          className={inputStyles.input}
          placeholder="Last name"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <span className={styles.error}>last name is required</span>
        )}
        <input
          type="text"
          className={inputStyles.input}
          placeholder="Profession"
          {...register("profession", { required: true })}
        />
        {errors.profession && (
          <span className={styles.error}>profession is required</span>
        )}
        <input
          type="text"
          className={inputStyles.input}
          placeholder="Email"
          {...register("email", {
            required: true,
            validate: { isEmail: (email) => EmailValidator.validate(email) },
          })}
        />
        {errors.email?.type === "required" && (
          <span className={styles.error}>Email is required</span>
        )}
        {errors.email?.type === "isEmail" && (
          <span className={styles.error}>Please enter a valid email</span>
        )}
        <input
          type="text"
          className={inputStyles.input}
          placeholder="Password"
          {...register("password", { required: true, minLength: 6 })}
        />

        {errors.password && (
          <span className={styles.error}>
            Password is must be 6 or more character&#39;s long
          </span>
        )}

        <button className={buttonStyles.button}>Sign Up</button>
      </form>
      <p>
        Already have an account yet?{" "}
        <span className={styles.signup__btn} onClick={() => setSignin(true)}>
          Sign In
        </span>
      </p>
    </div>
  );
};

export default Signup;
