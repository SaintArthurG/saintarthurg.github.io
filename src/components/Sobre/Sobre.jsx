import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.card}>
        <h2>Sobre mim</h2>
        <p>Nascido e criado na Ceilândia, berço evangêlico, mas hoje o que me move é o amor</p>
        <p>
          Sou uma pessoa que procura se conhecer todos os dias, tento ter coragem para combater toda injustiça que
          assola a minha volta.
        </p>
        <p>
          Gosto de ler, beber e passar tempo com os amigos, amo jogar e aprender!
        </p>

        <p>Formado em análise e desenvolvimento de sistemas pela Universidade Católica de Brasília, me considero autodidata,
          atualmente estou aprendendo francês com o duolingo, ukulele que peguei emprestado da minha irmã e estou explorando 
          filosofia com literatura russa.
        </p>
      </div>
    </section>
  );
}
