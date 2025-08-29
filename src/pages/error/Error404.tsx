import "./error404.scss";

export const Error404 = () => {
  return (
    <section className="error-page">
      <h1>404</h1>
      <h2>Sidan kunde inte hittas</h2>
      <p>Vi kunde tyvärr inte hitta sidan du letade efter.</p>
      <a href="/" className="button-link">
        Till startsidan
      </a>
    </section>
  );
};
