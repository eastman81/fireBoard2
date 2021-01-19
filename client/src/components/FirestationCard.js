import React /*, { useContext } */ from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  border: 2px solid lightgray;
  width: 30%;
  height: 150px;
  margin: 10px;
  color: white;
  box-shadow: 4px 4px 10px grey;
  transition: all 0.1s ease-in-out;
  text-align: center;
  float: left;
  display: flow-root;
  &:hover {
    box-shadow: 8px 8px 20px gray;
    transform: scale(1.1);
  }
  &:active {
    transform: translate(1px, 1px);
  }
`;

export default function Firestation(props) {
  const { stationInfo } = props;
  // TODO:
  // 1. align cards in middle, and have them fill the container better (I was thinking 3x3)
  // 2. fix inside styling
  // 3. get the length working
  // 4. on click, make them show names of who is stationed there

  return (
    <div>
      <StyledButton
        id="firestation"
        variant="contained"
        style={{
          backgroundColor:
            stationInfo.staffMin < stationInfo.staff.length
              ? "#43a047"
              : "#e53935",
        }}
      >
        <p id="stationname">{stationInfo.name}</p>
        <p id="staffCount"> Staff Count: {stationInfo.staff.length}</p>
        <p id="staffMin">Required: {stationInfo.staffMin}</p>
      </StyledButton>
    </div>
  );
}
