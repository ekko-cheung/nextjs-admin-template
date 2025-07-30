import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const poolConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Ekko.cheung#0',
    database: 'next_admin'
});

export const db = drizzle({ client: poolConnection, logger: true });