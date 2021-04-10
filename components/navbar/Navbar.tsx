import React from "react";
import Logo from "../../assets/icons/Logo";
import styles from "../../styles/navbar/navbar.module.scss";
import Notification from "../../assets/icons/notification";
import SearchIcon from "../../assets/icons/Search";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left__container}>
        <div className={styles.logo__container}>
          <Logo height={35} width={35} />
          <h2>Curiosity</h2>
        </div>
        <div className={styles.search__bar}>
          <input type="text" placeholder="Search for a question or an answer" />
          <div className={styles.search__icon}>
            <SearchIcon height={18} width={18} color="#d1d5db" />
          </div>
        </div>
      </div>
      <div className={styles.right__container}>
        <button className={styles.create__question_btn}>Add Question</button>
        <div className={styles.icon__container}>
          <Notification height={40} width={40} color={"#9CA3AF"} />
        </div>
        <div className={styles.user__initials}>SS</div>
      </div>
    </div>
  );
};

export default Navbar;
