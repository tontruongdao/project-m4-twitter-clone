import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ActionBar from "./ActionBar";
import Body from "./Body";
import Header from "./Header";

const Tweet = ({ data }) => {
  const ID = data.tweetIds;
  const TWEET = data.tweetsById;
  return (
    <TweetList>
      {ID.map((id) => (
        <SingleTweet>
          <Header
            avatar={TWEET[id].author.avatarSrc}
            name={TWEET[id].author.displayName}
            handle={TWEET[id].author.handle}
            time={TWEET[id].timestamp}
          >
            {/* <Link to={`${TWEET[id].author.handle}`}>
                {TWEET[id].author.handle}
              </Link> */}
          </Header>

          <StyledLink to={`/tweet/${TWEET[id].id}`}>
            <Body image={TWEET[id].media} message={TWEET[id].status}>
              {/* {TWEET[id].status} */}
            </Body>
          </StyledLink>
          <ActionBar
            tweetId={TWEET[id].id}
            numLikes={TWEET[id].numLikes}
            isLiked={TWEET[id].isLiked}
          />
        </SingleTweet>
      ))}
    </TweetList>
  );
};

const TweetList = styled.ul`
  /* border: 2px solid forestgreen; */
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  & li {
    /* border: 2px solid green; */
  }
`;

const SingleTweet = styled.li`
  border: 1px solid lightgrey;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Tweet;
