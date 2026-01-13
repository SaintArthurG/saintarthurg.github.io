import styles from "./Servicos.module.css";

export default function Servicos() {
  return (
    <section className={styles.servicos}>
      <h2>Gostos e habilidades</h2>
      <ul>
        <li>Inglês, mas não pratico</li>
        <li>Francês mas ainda no começo</li>
        <li>Ukulele, mas prefiro um violão</li>
        <li>Java, mas sem oportunidade</li>
        <li>Leitor, mas procrastinador</li>
      </ul>
    </section>
  );
}
