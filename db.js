import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://mahmoudmahfoz2000:21399333@cluster0.yibwq8d.mongodb.net/"; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

export async function connectToDatabase() {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db("shopping-app"); // Replace with your database name
}
