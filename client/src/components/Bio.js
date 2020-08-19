import React from "react";
import styled from "styled-components";

import { CurrentUserContext } from "./CurrentUserContext";

const Bio = (props) => {
  const Wrapper = styled.div`
    background-image: url(${props.banner});
    height: 50vh;
  `;

  return (
    <Wrapper>
      <Avatar src={props.avatar} />
      <HandleWrapper>
        <Handle>{props.handle}</Handle>
        <Display>@{props.displayName}</Display>
      </HandleWrapper>
      <Biography>{props.bio}</Biography>
      <Location>{props.location}</Location>
    </Wrapper>
  );
};

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  padding: 15px;
`;

const Handle = styled.div`
  color: white;
  font-size: 30px;
`;

const HandleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Display = styled.div`
  color: white;
  font-size: 15px;
`;

const Biography = styled.div`
  color: white;
`;

const Location = styled.div`
  color: white;
`;

export default Bio;
