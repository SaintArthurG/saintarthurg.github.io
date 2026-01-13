import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Amante da vida</h2>
          <p>De todos os falhos, sou o pior deles</p>
          <br />
          <p>
            Hoje viverei
          </p>
          <br />

          <p>Conversa fiada ou papo de négocio só me chamar</p>
          <div className={styles.actions}>
            <a
              href="https://wa.me/5561981632709"
              target="_blank"
              className={styles.whatsapp}
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a
              href="https://instagram.com/arthurhgodoy"
              target="_blank"
              className={styles.instagram}
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        <div className={styles.photo}>
          <img
            src={`${import.meta.env.BASE_URL}teste.png`}
            alt="Arthur Godoy – Desenvolvedor"
          />
        </div>
      </div>
    </section>
  );
}
