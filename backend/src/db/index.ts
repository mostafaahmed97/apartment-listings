import { config } from '../config';
import mongoose from 'mongoose';

export async function initDbConnection() {
  const uri = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

  console.log('Connecting to DB...');
  await mongoose.connect(uri);
  console.log('DB connection established');
}
