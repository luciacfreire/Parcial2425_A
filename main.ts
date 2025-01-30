import {MongoClient} from "mongodb"

const MONGO_URL = Deno.env.get("MONGO_URL");

if(!MONGO_URL){
  throw new Error("You need a mongo url");
}

const mongoClient = new MongoClient(MONGO_URL);
await mongoClient.connect();
console.log("Connected to MongoDB");

const db = mongoClient.db("");

