import React from "react";
import styles from "../../styles/signin/signin.module.scss";
import inputStyles from "../../styles/input/input.module.scss";
import buttonStyles from "../../styles/button/button.module.scss";
import * as EmailValidator from "email-validator";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import axios from "axios";
import { useAuth, Auth } from "../../context/auth";
import { useRouter } from "next/router";
import { url } from "../../util/url";

interface AppProps {
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signin = ({ setSignin }: AppProps) => {
  const { dispatch } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation(
    (data) =>
      axios.post(`${url}/auth/login`, data, {
        withCredentials: true,
      }),
    {
      onSuccess: (res) => {
        const { token, userInitials } = res.data as Auth;
        const payload = { token, userInitials };
        localStorage.setItem("x-credentials", token);
        dispatch({ type: "login", payload });
        router.push("/news-feed");
      },
    }
  );

  const onSubmit = (data) => mutate(data);

  return (
    <div className={styles.container}>
      <h3>Sign In</h3>
      <form
        className={styles.form__container}
        onSubmit={handleSubmit(onSubmit)}
      >
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
          type="password"
          className={inputStyles.input}
          placeholder="Password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && (
          <span className={styles.error}>
            Password is must be 6 or more character&#39;s long
          </span>
        )}
        <button className={buttonStyles.button}>Sign In</button>
      </form>

      <p>
        Dont have an account yet?
        <span className={styles.signup__btn} onClick={() => setSignin(false)}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default Signin;
