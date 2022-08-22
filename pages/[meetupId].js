import React, { Fragment } from "react";
import MeetupDetails from "../component/meetups/meetupDetails";
import { MongoClient, ObjectId } from "mongodb";

function MeetupIdDetails(props) {
  return (
    <MeetupDetails
      image={props.meetupData.image}
      title={props.meetupData.title}
      description={props.meetupData.description}
      address={props.meetupData.address}
      id={props.meetupData.id}
    />
  );
}

export default MeetupIdDetails;

export async function getStaticProps(context) {
  const { params } = context;

  const meetUpId = params.meetupId;

  const client = await MongoClient.connect(
    `mongodb+srv://admin:zHJFbopYrhj2akm6@cluster0.amv9pc3.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = await client.db();

  const meetupsData = await db
    .collection("meetUps")
    .findOne({ _id: ObjectId(meetUpId) });

  return {
    props: {
      meetupData: {
        id: meetupsData?._id.toString(),
        title: meetupsData.title,
        description: meetupsData.description,
        address: meetupsData.address,
        image: meetupsData.image,
      },
    },
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://admin:zHJFbopYrhj2akm6@cluster0.amv9pc3.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = await client.db();

  const meetupsData = await db
    .collection("meetUps")
    .find({}, { _id: 1 })
    .toArray();

  client.close();

  return {
    paths: meetupsData.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: false,
  };
}
