import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Wrapper>
      <Avatar src={props.avatar} alt={props.name} />
      <a href={`/${props.handle}`}>
        <div>{props.name}</div>
      </a>
      <Handle>{props.handle}</Handle>
      <Time>{props.time}</Time>
    </Wrapper>
  );
};

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const Handle = styled.div`
  color: lightgrey;
`;

const Time = styled.div`
  padding: 15px;
  color: lightgrey;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

export default Header;
