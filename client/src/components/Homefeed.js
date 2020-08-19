import React from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import Tweet from "./Tweet";
import TweetForm from "./TweetForm";

const HomeFeed = () => {
  const {
    homefeed,
    homefeedStatus,
    currentUser,
    currentUserStatus,
  } = React.useContext(CurrentUserContext);
  // console.log(homefeed);

  React.useEffect(() => {
    console.log("Homefeed.js is mounted");
  }, [homefeed]);

  return (
    <Wrapper>
      {homefeedStatus === "idle" ? (
        <div>
          <TweetForm />
          <SingleTweet>
            <Tweet data={homefeed} />
          </SingleTweet>
        </div>
      ) : (
        <h1>Loading Page..</h1>
      )}
    </Wrapper>
  );
};

const SingleTweet = styled.div`
  border: 1px lightgrey;
`;

const Wrapper = styled.div`
  /* border: 5px solid blue; */
  flex: 5;
`;

export default HomeFeed;
