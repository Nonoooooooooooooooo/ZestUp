import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// --- Comptes de test ---
const users = [
  { id: 1, name: "Alice", email: "alice@example.com", password: "1234" },
  { id: 2, name: "Bob", email: "bob@example.com", password: "1234" },
];

export default NextAuth({
  callbacks: {
    async jwt({ token, user }) {
      // Ajoute les infos de l'utilisateur au token
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      // Ajoute user dans session pour le front
      session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Ajoute les infos de l'utilisateur au token
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      // Ajoute user dans session pour le front
      session.user = token.user;
      return session;
    },
  },
=======
  session: {
    strategy: "jwt", // utilisation de JWT pour la session
  },
  pages: {
    signIn: "/auth/signin", // page de connexion
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
>>>>>>> f25e3f3 (Enable NextAuth secret/debug; ignore .env.local, node_modules, .next)
});

