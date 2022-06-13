import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID,
      
      // clientId: "182225597157-k5628o1bei3cseddfv4hupg46n74ot0v.apps.googleusercontent.com",
      // clientSecret: "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"
    }),
  ],
});
