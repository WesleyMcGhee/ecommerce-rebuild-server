import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  connectionString: process.env.CONNECTION_STRING ?? "",
});

export default async function db() {
  await client.connect();
  return drizzle(client);
}
