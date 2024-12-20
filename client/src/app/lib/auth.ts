import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { NextAuthOptions } from "next-auth";
import { config } from "../api/config";


export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: config.googleClientId,
        clientSecret: config.googleClientSecret,
      }),
      FacebookProvider({
        clientId: config.facebookClientId,
        clientSecret: config.facebookClientSecret,
      }),
    ],
    secret: config.nextAuthSecret,
    callbacks: {
      async signIn({ user, account }) {
        const token = account?.provider === "google" && account.id_token;
        
        
        return true;
      },
    },
  };