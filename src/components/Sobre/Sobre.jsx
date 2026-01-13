import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.card}>
        <h2>Sobre mim</h2>

        <p>
          Nascido e criado na Ceilândia, berço evangélico, mas hoje o que me
          move é o amor.
        </p>

        <p>
          Sou uma pessoa que busca se conhecer todos os dias e tento ter coragem
          para combater as injustiças que me cercam.
        </p>

        <p>
          Gosto de ler, beber e passar tempo com os amigos. Amo jogar e,
          principalmente, aprender.
        </p>

        <p>
          Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade
          Católica de Brasília. Me considero autodidata e, atualmente, estou
          aprendendo francês pelo Duolingo, tocando ukulele (emprestado da minha
          irmã) e explorando filosofia através da literatura russa.
        </p>
      </div>
    </section>
  );
}
