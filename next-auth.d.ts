import NextAuth, { type DefaultSession } from "next-auth";
import { AppUser } from "./types";
// export type ExtendedUser = DefaultSession["user"] & {
//   role: UserRole;
//   isTwoFactorEnabled: boolean;
//   isOAuth: boolean;
// };
export type ExtendedUser = DefaultSession["user"] & {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string | null;
  bio: string | null;
  phone_number: string | null;
  is_email_verified: boolean;
  token: string;
};
declare module "next-auth" {
  interface Session {
    user: AppUser;
  }
}
