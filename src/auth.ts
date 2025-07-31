import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins"
import { db } from "./db/db";
import * as authSchema from "./auth-schema";

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true
    },
    database: drizzleAdapter(db, {
        provider: 'mysql',
        schema: authSchema
    }),
    plugins: [
        admin()
    ]
});