import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        try {
          const res = await axios.post('http://3.35.216.158:8080/api/login', {
            email: credentials.email,
            password: credentials.password
          }, {
            headers: { "Content-Type": "application/json" }
          });

          if (res.status === 200 && res.data) {
            return res.data;
          }
          throw new Error('Authentication failed');
        } catch (error) {
          console.error('Authentication error:', error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
});
