import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { extractExpTimeFromJwt } from "./utils/decodeJWT";
import { Api } from "@/service/api";


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        try {
          const res = await Api.post('/login', {
            email: credentials.email,
            password: credentials.password
          }, {
            headers: { "Content-Type": "application/json" }
          });

          if (res.status === 200 && res.data) {
            return { ...res.data, token: res.headers.jwttoken };
          }
          throw new Error('Authentication failed');
        } catch (error) {
          console.error('Authentication error:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {

      session.user = token;
      if (token.exp) {
        console.log(session)
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,


});
