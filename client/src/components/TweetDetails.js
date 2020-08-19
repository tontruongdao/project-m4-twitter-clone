import React from "react";
import styled from "styled-components";
import BigTweet from "./BigTweet";

const TweetDetails = () => {
  const [tweet, setTweet] = React.useState(null);
  const [tweetStatus, setTweetStatus] = React.useState("loading");

  const fetchTweet = async () => {
    const Url = `/api${window.location.pathname}`;
    try {
      const response = await fetch(Url);
      const results = await response.json();
      setTweet(results);
      setTweetStatus("idle");
      // console.log(results);
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    fetchTweet();
  }, []);

  console.log(tweet);

  return (
    <div>
      {tweetStatus === "idle" ? (
        <div>
          <BigTweet data={tweet} />
        </div>
      ) : (
        <h1>Loading Page..</h1>
      )}
    </div>
  );
};

export default TweetDetails;
