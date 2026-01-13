export default function Videos() {
  return (
    <section>
      <h2>Conteúdos e orientações</h2>
      <p>
        Vídeos educativos e informativos voltados à promoção da saúde
        e bem-estar.
      </p>

      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/ID_DO_VIDEO"
        title="Vídeo"
        allowFullScreen
        style={{ marginTop: "1rem", borderRadius: "12px" }}
      />
    </section>
  );
}
