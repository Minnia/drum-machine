import React, { useState, useMemo } from "react";
import { DrumPad } from "./styled";

const drumLetters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const sounds = [
  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"),
  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
];

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

const renderDrumRow = (_, rowIndex, clickDrumPad, drumColorRefs) => {
  let count = 0;
  if (rowIndex === 1) {
    count = 3;
  }
  if (rowIndex === 2) {
    count = 6;
  }
  console.log("38", drumColorRefs);
  return (
    <div
      key={rowIndex}
      style={{ borderRadius: "8px", backgroundColor: "black" }}
    >
      {Array(3)
        .fill(0)
        .map(() => {
          count++;
          const drumLettersIndex = count - 1;
          const clickOnDrumPad = () => clickDrumPad(drumLettersIndex);
          return (
            <div key={drumLettersIndex}>
              <DrumPad
                ref={drumColorRefs[drumLettersIndex]}
                className="drum-pad"
                clickColor={drumPadColors[drumLettersIndex]}
                onClick={clickOnDrumPad}
              >
                {drumLetters[drumLettersIndex]}
              </DrumPad>
            </div>
          );
        })}
    </div>
  );
};

const Drums = () => {
  const drumColorRefs = useMemo(() => Array(9).fill(React.createRef(), []));
  const [drumSoundName, setDrumSoundName] = useState(false);
  function handleKeyPress(e) {
    if (e.key === "q") {
      new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      ).play();
      console.log(drumColorRefs[0]);
      setDrumSoundName("Heater-1");
      drumColorRefs[0].current.style.background = "red";
    }
    if (e.key === "w") {
      new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      ).play();
      console.log("Heater-2");
      setDrumSoundName("Heater-2");
      drumColorRefs[1].current.style.background = "green";
    }
    if (e.key === "e") {
      new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      ).play();
      console.log("Heater-3");
      setDrumSoundName("Heater-3");
    }
    if (e.key === "a") {
      new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      ).play();
      console.log("Heater-4");
      setDrumSoundName("Heater-4");
    }
    if (e.key === "s") {
      new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      ).play();
      console.log("Heater-6");
      setDrumSoundName("Heater-6");
    }
    if (e.key === "d") {
      new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      ).play();
      console.log("Dsc-Oh");
      setDrumSoundName("Dsc-Oh");
    }
    if (e.key === "z") {
      new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      ).play();
      console.log("Kick-n-Hat");
      setDrumSoundName("Kick-n-Hat");
    }
    if (e.key === "x") {
      new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      ).play();
      console.log("Kick-1");
      setDrumSoundName("Kick-1");
    }
    if (e.key === "c") {
      new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      ).play();
      console.log("Cev-H2");
      setDrumSoundName("Cev-H2");
    }
  }
  const clickDrumPad = async i => {
    return await sounds[i].play();
  };
  const rowsOfButtons = 3;
  return (
    <div
      onKeyPress={handleKeyPress}
      id="drum-machine"
      tabIndex={0}
      style={{
        margin: "100px",
        border: "1px solid black",
        padding: "100px",
        backgroundColor: "black"
      }}
    >
      <span>
        {drumSoundName && (
          <span style={{ backgroundColor: "white" }}>{drumSoundName}</span>
        )}
      </span>

      <div
        id="display"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {Array(rowsOfButtons)
          .fill(0)
          .map((row, i) => renderDrumRow(row, i, clickDrumPad, drumColorRefs))}
      </div>
    </div>
  );
};

export default Drums;
