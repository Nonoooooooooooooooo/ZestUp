import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Pour l’exemple, on stocke les comptes en mémoire
// Dans un vrai projet, tu utiliseras une base (SQLite, PostgreSQL, MongoDB…)

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
        password: { label: "Mot de passe", type: "password" }
      },
      async authorize(credentials) {
        const user = users.find(
          u => u.email === credentials.email && u.password === credentials.password
        );
        if (user) {
          return { id: user.id, name: user.name, email: user.email };
        } else {
          return null;
        }
      }
    })
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/auth/signin" } // page personnalisée
});
