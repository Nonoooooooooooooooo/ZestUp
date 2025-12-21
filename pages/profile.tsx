import { useSession } from "next-auth/react";
import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) return <p>Vous devez être connecté pour accéder à cette page.</p>;

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "600px", margin: "2rem auto", textAlign: "center" }}>
        <h1>Profil de {session.user?.name}</h1>
        <img src={session.user?.image || "/images/avatar.png"} alt="Avatar" style={{ width: "120px", borderRadius: "50%" }} />
        <p>Email: {session.user?.email}</p>
        <p>Modifier vos informations sera bientôt disponible.</p>
      </div>
      <Footer />
    </>
  );
}
