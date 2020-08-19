import React, { useEffect } from "react";
import styled from "styled-components";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [currentUserStatus, setCurrentUserStatus] = React.useState("loading");

  const [homefeed, setHomefeed] = React.useState(null);
  const [homefeedStatus, setHomefeedStatus] = React.useState("loading");

  const fetchProfile = async () => {
    const Url = "/api/me/profile";
    try {
      const response = await fetch(Url);
      const results = await response.json();
      setCurrentUser(results);
      setCurrentUserStatus("idle");
      // console.log(results);
    } catch (error) {
      throw error;
    }
  };

  const fetchHomefeed = async () => {
    const Url = "/api/me/home-feed";
    try {
      const response = await fetch(Url);
      const results = await response.json();
      setHomefeed(results);
      setHomefeedStatus("idle");
      // console.log(results);
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    fetchProfile();
    fetchHomefeed();
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        currentUserStatus,
        homefeedStatus,
        homefeed,
        setCurrentUser,
        setHomefeedStatus,
        fetchHomefeed,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
