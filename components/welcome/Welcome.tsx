import React from "react";
import styles from "../../styles/welcome/welcome.module.scss";
import Logo from "../../assets/icons/Logo";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";

const Welcome = () => {
  const [showSignin, setSignin] = React.useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.logo__container}>
        <Logo height={50} width={50} />
        <h2>Curiosity</h2>
      </div>

      <div className={styles.register__container}>
        {showSignin && <Signin setSignin={setSignin} />}
        {!showSignin && <Signup setSignin={setSignin} />}
      </div>
    </div>
  );
};

export default Welcome;
