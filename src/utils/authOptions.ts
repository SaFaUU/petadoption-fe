import { env } from "@/config";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize(credentials, req): Promise<any> {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        const res = await fetch(`${env.server_url}/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const user = await res.json();
        console.log(user);
        cookies().set("token", user.data.token);
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user.data as any;
        }
        // Return null if user data could not be retrieved
        return null as any;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.token = user.token || "";
        token.role = user.role || "USER";
      }
      return token as any;
    },
    session: async ({ session, token, user }: any) => {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.token = token.token;
      session.user.role = token.role || "USER";
      return session;
    },
  },
};
