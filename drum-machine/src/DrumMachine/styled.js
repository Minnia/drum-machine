import styled from "styled-components";

export const DrumPadDiv = styled.div`
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  outline: none;
`;

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

export const DrumPadKeys = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 100px);
  grid-gap: 10px;
`;

export const ContainerDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px;
  background-color: black;
`;

export const DrumSoundNameSpan = styled.span`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
