import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
import { createConnection } from 'typeorm';
import { config } from '../config';

const main = async () => {
  try {
    const connection = await createConnection({
      type: 'postgres',
      host: config.database.host,
      port: config.database.port,
      database: config.database.name,
      password: config.database.password,
    });

    console.log('Connected to database 💿');
  } catch (error) {
    throw new Error(error);
  }
};

main();
