import React from "react";
import styled from "styled-components";

const Body = (props) => {
  return (
    <div>
      <div>{props.message}</div>
      {props.image.length > 0 && <Image src={props.image[0].url} alt="" />}
    </div>
  );
};

const Image = styled.img`
  width: 50%;
`;

export default Body;
