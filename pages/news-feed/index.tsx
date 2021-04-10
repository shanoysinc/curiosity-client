import React from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "../../styles/newsfeed/newsfeed.module.scss";

const index = () => {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
};

export default index;
