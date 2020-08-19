import React, { useContext } from "react";
import styled from "styled-components";

import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";

const ActionBar = (props) => {
  const [isLiked, setIsLiked] = React.useState(props.isLiked);
  const [numLikes, setNumLikes] = React.useState(props.numLikes);

  const putLike = () => {
    const Url = `/api/tweet/${props.tweetId}/like`;

    try {
      fetch(Url, {
        method: "PUT",
        body: JSON.stringify({ like: !isLiked }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      setIsLiked(!isLiked);
    } catch (error) {
      window.location.href = "/bookmarks";
    }
  };

  React.useEffect(() => {
    // console.log("[ActionBar.js] has mounted!");
    return () => {
      console.log("[ActionBar.js] has unmounted...");
    };
  }, [isLiked]);

  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action
        color="rgb(23, 191, 99)"
        size={40}
        onClick={(ev) => console.log("retweeted")}
      >
        <TweetActionIcon kind="retweet" />
      </Action>
      <Action color="rgb(224, 36, 94)" size={40} onClick={putLike}>
        <LikeButton isLiked={isLiked} />
      </Action>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default ActionBar;
