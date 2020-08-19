import React from "react";
import styled from "styled-components";

import { CurrentUserContext } from "./CurrentUserContext";

import Bio from "./Bio";
import Tweet from "./Tweet";

const Profile = () => {
  const [userfeed, setUserfeed] = React.useState(null);
  const [userfeedStatus, setUserfeedStatus] = React.useState("loading");
  const [userProfile, setUserProfile] = React.useState(null);
  const [userProfileStatus, setUserProfileStatus] = React.useState("loading");

  const { homefeed, homefeedStatus } = React.useContext(CurrentUserContext);
  // console.log(homefeed);

  const tweetHandleName = window.location.pathname;

  const fetchProfile = async () => {
    const Url = `/api/${tweetHandleName}/profile/`;
    try {
      const response = await fetch(Url);
      const results = await response.json();
      setUserProfile(results);
      setUserProfileStatus("idle");
      // console.log(results);
    } catch (error) {
      throw error;
    }
  };

  const fetchProfilefeed = async () => {
    const Url = `/api/${tweetHandleName}/feed/`;
    try {
      const response = await fetch(Url);
      const results = await response.json();
      setUserfeed(results);
      setUserfeedStatus("idle");
      // console.log(results);
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    fetchProfile();
    fetchProfilefeed();
  }, []);

  console.log(userProfile);

  return (
    <Wrapper>
      {userfeedStatus === "idle" ? (
        <div>
          <Bio
            handle={userProfile.profile.handle}
            banner={userProfile.profile.bannerSrc}
            avatar={userProfile.profile.avatarSrc}
            displayName={userProfile.profile.displayName}
            bio={userProfile.profile.bio}
            location={userProfile.profile.location}
          />
          <Tweet data={userfeed} />
        </div>
      ) : (
        <h1>Loading Page..</h1>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 5px solid blue; */
  flex: 5;
`;

export default Profile;
