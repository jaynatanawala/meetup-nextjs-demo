import { useEffect } from "react";
import MeetupList from "../component/meetups/MeetupList";

import { MongoClient } from "mongodb";

export default function Home(props) {
  const [loadedMeetups, setLoadedMeetups] = [];

  useEffect(() => {}, []);

  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://admin:zHJFbopYrhj2akm6@cluster0.amv9pc3.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = await client.db();

  const meetupsData = await db.collection("meetUps").find().toArray();

  client.close();

  return {
    props: {
      meetups: meetupsData.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
      })),
    },
  };
}
