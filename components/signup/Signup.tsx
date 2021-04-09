import React from "react";
import styles from "../../styles/signin/signin.module.scss";
import inputStyles from "../../styles/input/input.module.scss";
import buttonStyles from "../../styles/button/button.module.scss";

interface AppProps {
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signup = ({ setSignin }: AppProps) => {
  return (
    <div className={styles.container}>
      <h3>Sign up</h3>
      <form className={styles.form__container}>
        <input
          type="text"
          className={inputStyles.input}
          placeholder="First name"
        />
        <input
          type="text"
          className={inputStyles.input}
          placeholder="Last name"
        />
        <input
          type="text"
          className={inputStyles.input}
          placeholder="Profession"
        />
        <input type="text" className={inputStyles.input} placeholder="Email" />
        <input
          type="text"
          className={inputStyles.input}
          placeholder="Password"
        />

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
