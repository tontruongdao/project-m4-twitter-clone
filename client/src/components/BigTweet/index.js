import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ActionBar from "./ActionBar";
import Body from "./Body";
import Header from "./Header";

const BigTweet = ({ data }) => {
  const TWEET = data.tweet;
  return (
    <SingleTweet>
      <Header
        avatar={TWEET.author.avatarSrc}
        name={TWEET.author.displayName}
        handle={TWEET.author.handle}
        time={TWEET.timestamp}
      >
        {/* <Link to={`${TWEET[id].author.handle}`}>
                {TWEET[id].author.handle}
              </Link> */}
      </Header>

      <StyledLink to={`/tweet/${TWEET.id}`}>
        <Body image={TWEET.media} message={TWEET.status}>
          {/* {TWEET[id].status} */}
        </Body>
      </StyledLink>
      <ActionBar
        tweetId={TWEET.id}
        numLikes={TWEET.numLikes}
        isLiked={TWEET.isLiked}
      />
    </SingleTweet>
  );
};

const SingleTweet = styled.div`
  border: 1px solid lightgrey;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default BigTweet;
