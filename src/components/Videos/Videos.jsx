import styles from "./Videos.module.css";

export default function Videos() {
  return (
    <section className={styles.videos}>
      <h2>Esse é Arthur Godoy</h2>
      <p>
        Vídeos de momentos da minha vida.
      </p>

      <div className={styles.grid}>
        <iframe
          src="https://www.youtube.com/embed/ID_DO_VIDEO"
          title="Vídeo 1"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/ID_DO_VIDEO"
          title="Vídeo 2"
          allowFullScreen
        />
      </div>
    </section>
  );
}
