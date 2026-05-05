// https://medium.com/@gabrieldrouin/node-js-2025-guide-how-to-setup-express-js-with-typescript-eslint-and-prettier-b342cd21c30d

import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

async function main() {
  let password = process.env.AWS_PWD;
  let aws_host = process.env.AWS_HOST;
  console.log(password, aws_host);
  
  const client = new Client({
    host: aws_host,
    port: 5432,
    database: 'postgres',
    user: 'shao',
    password,
    ssl: { rejectUnauthorized: false, ca: require('fs').readFileSync('./config/global-bundle.pem').toString() }
  });
  
  console.log(client.host, client.port, client.database, client.user, client.password);

  try {
    console.log("Connecting...")
    await client.connect();
    console.log("Connected!")
    const res = await client.query('SELECT version()');
    console.log(res.rows[0].version);
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  } finally {
    await client.end();
  }
}
main().catch(console.error);