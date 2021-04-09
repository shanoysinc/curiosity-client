import styles from "../styles/Home.module.scss";
import Welcome from "../components/welcome/Welcome";

export default function Home() {
  return (
    <div className={styles.container}>
      <Welcome />
    </div>
  );
}
