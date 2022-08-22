import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      `mongodb+srv://admin:zHJFbopYrhj2akm6@cluster0.amv9pc3.mongodb.net/meetups?retryWrites=true&w=majority`
    );

    const db = await client.db();

    const meetupsData = await db.collection("meetUps").find();

    res.status(201).json({ data: meetupsData });
  }
}
