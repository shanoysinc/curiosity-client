import React from "react";
import styles from "../../styles/signin/signin.module.scss";
import inputStyles from "../../styles/input/input.module.scss";
import buttonStyles from "../../styles/button/button.module.scss";

interface AppProps {
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
}
const Signin = ({ setSignin }: AppProps) => {
  return (
    <div className={styles.container}>
      <h3>Sign In</h3>
      <form className={styles.form__container}>
        <input type="text" className={inputStyles.input} placeholder="Email" />
        <input
          type="text"
          className={inputStyles.input}
          placeholder="Password"
        />
        <button className={buttonStyles.button}>Sign In</button>
      </form>

      <p>
        Don't have an account yet?{" "}
        <span className={styles.signup__btn} onClick={() => setSignin(false)}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default Signin;
