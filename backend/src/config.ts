import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: Number(process.env.PORT) || 3000,
  db: {
    host: process.env.DB_HOST || '',
    port: process.env.DB_PORT || 0,
    name: process.env.DB_NAME || '',
  },
};
