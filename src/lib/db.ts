import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';


let db;

export async function getDatabase() {
  if (!db) {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db();
  }
  return db;
}

export async function getCollection(name) {
  const db = await getDatabase();
  return db.collection(name);
}