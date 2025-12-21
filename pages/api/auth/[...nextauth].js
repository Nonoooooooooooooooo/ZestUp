import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// --- Comptes de test ---
const users = [
  { id: 1, name: "Alice", email: "alice@example.com", password: "1234" },
  { id: 2, name: "Bob", email: "bob@example.com", password: "1234" },
];

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        const user = users.find(
          (u) =>
            u.email === credentials.email && u.password === credentials.password
        );
        if (user) return { id: user.id, name: user.name, email: user.email };
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt", // JWT pour la session
  },
  pages: {
    signIn: "/auth/signin", // page de connexion
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user; // ajout user uniquement à la connexion
      return token;
    },
    async session({ session, token }) {
      if (token?.user) session.user = token.user; // protège contre undefined
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "testsecret",
  debug: process.env.NODE_ENV === "development",
});
