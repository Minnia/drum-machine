import styled from "styled-components";

export const DrumPad = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid black;
  margin: 8px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  &:active {
    background-color: ${props => props.clickColor};
  }
  &:hover {
    border-radius: 20px;
  }
`;
