import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p><strong>Arthur Godoy – Desenvolvedor Java</strong></p>
      <p>Sonhador</p>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
}
