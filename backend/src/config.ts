import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: Number(process.env.port) || 3000,
};
