import React, { useEffect } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import { FiTwitter } from "react-icons/fi";

const TweetForm = () => {
  const { currentUser, currentUserStatus, fetchHomefeed } = React.useContext(
    CurrentUserContext
  );

  const sendPost = (ev) => {
    ev.preventDefault();
    // console.log("post was submitted");

    const postMessage = document.getElementById("post").value;
    // console.log(postMessage);
    postTweet(postMessage);
  };

  const postTweet = (message) => {
    const Url = `/api/tweet/`;

    try {
      fetch(Url, {
        method: "POST",
        body: JSON.stringify({ status: message }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(fetchHomefeed);
    } catch (error) {
      throw error;
      //   window.location.href = "/bookmarks";
    }
  };

  return (
    <Wrapper>
      {currentUserStatus === "idle" ? (
        <div>
          <Avatar src={currentUser.profile.avatarSrc} />
          <form>
            <Input type="text" placeholder="    What's happening?" id="post" />
            <ButtonWrapper>
              <Button onClick={sendPost}>
                <FiTwitter />
              </Button>
            </ButtonWrapper>
          </form>
        </div>
      ) : (
        <h1>Loading Page..</h1>
      )}
    </Wrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  padding: 30px;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  box-shadow: 1px 1px 1px grey;
  border: 1px solid lightgrey;
`;

const Avatar = styled.img`
  width: 100px;
  height: 120px;
  border-radius: 120%;
  padding: 15px;
`;

const Button = styled.button`
  color: magenta;
  background-color: navy;
  border-radius: 10px;
  height: 5vh;
  width: 8vh;
  border: none;
  box-shadow: 1px 1px grey;
`;

const Input = styled.input`
  padding-left: 5px;
  width: 100%;
  height: 32px;
  border: none;
`;

export default TweetForm;
