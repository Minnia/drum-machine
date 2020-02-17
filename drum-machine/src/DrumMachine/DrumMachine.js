import React, { useState } from "react";
import { DrumPad, DrumPadDiv, ContainerDiv } from "./styled";

const drumLetters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const drumPadColors = [
  "#EFC530",
  "#30ADFF",
  "#F1567A",
  "#63C51D",
  "#494856",
  "#C10505",
  "#08BAB9",
  "#E111FF",
  "#BAE66C"
];

const renderDrumPad = (handleKeyPress, i, drumPadColor, drumLetter) => {
  const handleClick = e => {
    handleKeyPress(e, i);

    setTimeout(() => {}, 100);
  };
  return (
    <div key={i}>
      <DrumPad id={i} clickColor={drumPadColor} onClick={handleClick}>
        {drumLetter}
      </DrumPad>
    </div>
  );
};
const Drums = () => {
  const [drumSoundName, setDrumSoundName] = useState(false);

  const handleDrumPad = (sound, soundName, i) => {
    new Audio(sound).play();
    setDrumSoundName(soundName);
    document.getElementById(i).style.background = drumPadColors[i];
    setTimeout(() => {
      document.getElementById(i).style.background = "white";
    }, 100);
  };
  function handleKeyPress(e, i) {
    switch (true) {
      case e.key === "q" || i === 0:
        handleDrumPad(
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
          "Heater-1",
          0
        );

        break;
      case e.key === "w" || i === 1:
        handleDrumPad(
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
          "Heater-2",
          1
        );
        break;
      case e.key === "e" || i === 2:
        handleDrumPad(
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
          "Heater-3",
          2
        );
        break;
      case e.key === "a" || i === 3:
        handleDrumPad(
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
          "Heater-4",
          3
        );
        break;
      case e.key === "s" || i === 4:
        handleDrumPad(
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
          "Heater-6",
          4
        );
        break;
      case e.key === "d" || i === 5:
        handleDrumPad(
          "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
          "Dsc-Oh",
          5
        );
        break;
      case e.key === "z" || i === 6:
        handleDrumPad(
          "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
          "Kick-n-Hat",
          6
        );
        break;
      case e.key === "x" || i === 7:
        handleDrumPad(
          "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
          "Kick-1",
          7
        );
        break;
      case e.key === "c" || i === 8:
        handleDrumPad(
          "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
          "Cev-H2",
          8
        );
        break;
      default:
        break;
    }
  }
  const handleClick = e => handleKeyPress(e);
  const drumPads = 9;
  return (
    <ContainerDiv>
      <DrumPadDiv
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        tabIndex={0}
      >
        <span>
          {drumSoundName && (
            <span style={{ backgroundColor: "white" }}>{drumSoundName}</span>
          )}
        </span>

        <div
          id="display"
          style={{
            display: "grid",
            gridTemplateRows: "repeat(3, 100px)",
            gridTemplateColumns: "repeat(3, 100px)",
            gridGap: "10px"
          }}
        >
          {Array(drumPads)
            .fill(0)
            .map((_, i) =>
              renderDrumPad(handleKeyPress, i, drumPadColors[i], drumLetters[i])
            )}
        </div>
      </DrumPadDiv>
    </ContainerDiv>
  );
};

export default Drums;
