import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Wrapper>
      <Avatar src={props.avatar} alt={props.name} />
      <Link href={`/${props.handle}`}>
        <Name>{props.name}</Name>
      </Link>
      <Handle>@{props.handle} - </Handle>
      <Time> {props.time}</Time>
    </Wrapper>
  );
};

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Handle = styled.div`
  color: lightgrey;
`;

const Name = styled.div`
  font-size: 30px;
`;

const Time = styled.div`
  color: lightgrey;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export default Header;
