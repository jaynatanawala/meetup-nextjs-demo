import { MongoClient } from "mongodb";

export default async function handleClientScriptLoad(req, res) {
  if (req.method === "POST") {
    const client = await MongoClient.connect(
      `mongodb+srv://admin:zHJFbopYrhj2akm6@cluster0.amv9pc3.mongodb.net/meetups?retryWrites=true&w=majority`
    );

    const db = await client.db();

    const newRecord = await db
      .collection("meetUps")
      .insertOne(JSON.parse(req.body));

    client.close();

    res.status(201).json({ message: "Inserted successfully" });
  }
}
