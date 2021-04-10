import { useState, useEffect } from "react";
import styles from "../../styles/welcome/welcome.module.scss";
import Logo from "../../assets/icons/Logo";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";
import axios from "axios";
import { useRouter } from "next/router";
import { useAuth } from "../../context/auth";
import { url } from "../../util/url";
const Welcome = () => {
  const [showSignin, setSignin] = useState(true);
  const { dispatch } = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function verifyUser() {
      const token = localStorage.getItem("x-credentials") || null;
      if (token) {
        const auth = await axios.get(`${url}/auth/verify-token`, {
          headers: { authorization: `Bearer ${token}` },
          withCredentials: true,
        });

        if (auth.data.isAuth) {
          const payload = { token, userInitials: auth.data.userInitials };
          dispatch({ type: "login", payload });

          router.push("/news-feed");
        }
      }
    }

    verifyUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
