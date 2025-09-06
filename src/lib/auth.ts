import { BetterAuth } from 'better-auth';

export const auth = new BetterAuth({
  providers: [
    {
      id: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    { id: "credentials" }
  ],
  baseURL: process.env.BASE_URL,
  // additional Better Auth options
});
