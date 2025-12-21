import { getCsrfToken, signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn({ csrfToken }) {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", { redirect: false, email, password });
    if (res.error) setError("Email ou mot de passe incorrect");
    if (res.ok) window.location.href = "/"; // redirige vers la page d'accueil
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>Email</label>
        <input name="email" type="text" required />
        <label>Mot de passe</label>
        <input name="password" type="password" required />
        <button type="submit">Se connecter</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  return { props: { csrfToken: await getCsrfToken(context) } };
}
