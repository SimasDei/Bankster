export const config = {
  database: {
    name: process.env.DB_NAME,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
  },
};
