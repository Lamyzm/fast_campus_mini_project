import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn
} = NextAuth({
  providers: [
    CredentialsProvider({

      name: 'Credentials',

      async authorize(credentials, req) {
        const res = await fetch("http://3.35.216.158:8080/api/login", {
          method: 'POST',
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password
          }),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ]
});
