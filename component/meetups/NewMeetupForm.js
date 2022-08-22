import React, { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRouter } from "next/router";

function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const router = useRouter();

  const submitHandler = async (event) => {
    event.preventDefault();

    const meetupData = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      address: addressRef.current.value,
      description: descriptionRef.current.value,
    };

    const response = await fetch(`/api/newMeetup`, {
      method: "POST",
      body: JSON.stringify(meetupData),
    });

    const data = await response.json();

    console.log("response data ", data);
    alert(data.message);
    router.push("/");
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meet up title</label>
          <input type={"text"} id="title" required ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meet up image</label>
          <input type={"url"} id="image" required ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meet up Address</label>
          <input type={"text"} id="address" ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meet up description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
