import { client } from "../index.js";

export async function createMobiles(data) {
  return await client.db("b42wd2").collection("mobiles").insertMany(data);
}
export async function getMobiles() {
  return await client.db("b42wd2").collection("mobiles").find({}).toArray();
}
