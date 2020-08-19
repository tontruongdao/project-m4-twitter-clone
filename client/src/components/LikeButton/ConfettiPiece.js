/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components";

import Particle from "./Particle";

const ConfettiPiece = ({ angle, distance, color }) => {
  const size = 10;

  return (
    <CenteredWithinParent>
      <Particle
        angle={angle}
        startDistance={distance * 0.55}
        endDistance={distance}
      >
        <Circle
          style={{
            width: size,
            height: size,
            background: color,
          }}
        />
      </Particle>
    </CenteredWithinParent>
  );
};

const warmKeyframe = keyframes`
  0% { background: pink; }
  50% { background: yellow; }
  100% { background: pink; }
`;
const midKeyframe = keyframes`
  0% { background: blue; }
  50% { background: hotpink; }
  100% { background: blue; }
`;
const coolKeyframe = keyframes`
  0% { background: turquoise; }
  50% { background: violet; }
  100% { background: turquoise; }
`;

const getKeyframeForId = (id) => {
  switch (id) {
    case "warm":
      return warmKeyframe;
    case "mid":
      return midKeyframe;
    case "cool":
      return coolKeyframe;
    default:
    // Do nothing
  }
};

const CenteredWithinParent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Circle = styled.div`
  border-radius: 50%;
  animation: ${(props) => getKeyframeForId(props.keyframeId)} 1000ms infinite;
`;

export default ConfettiPiece;
