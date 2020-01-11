import React, { useState } from "react";
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

const renderDrumRow = (_, rowIndex, clickDrumPad) => {
  let count = 0;
  if (rowIndex === 1) {
    count = 3;
  }
  if (rowIndex === 2) {
    count = 6;
  }

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
  const [drumSoundName, setDrumSoundName] = useState(false);
  function handleKeyPress(e) {
    switch (true) {
      case e.key === "q":
        new Audio(
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        ).play();
        setDrumSoundName("Heater-1");
        break;
      case e.key === "w":
        new Audio(
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        ).play();
        console.log("Heater-2");
        setDrumSoundName("Heater-2");
        break;
      case e.key === "e":
        new Audio(
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        ).play();
        console.log("Heater-3");
        setDrumSoundName("Heater-3");
        break;
      case e.key === "a":
        new Audio(
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        ).play();
        console.log("Heater-4");
        setDrumSoundName("Heater-4");
        break;
      case e.key === "s":
        new Audio(
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        ).play();
        console.log("Heater-6");
        setDrumSoundName("Heater-6");
        break;
      case e.key === "d":
        new Audio(
          "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        ).play();
        console.log("Dsc-Oh");
        setDrumSoundName("Dsc-Oh");
        break;
      case e.key === "z":
        new Audio(
          "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        ).play();
        console.log("Kick-n-Hat");
        setDrumSoundName("Kick-n-Hat");
        break;
      case e.key === "x":
        new Audio(
          "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        ).play();
        console.log("Kick-1");
        setDrumSoundName("Kick-1");
        break;
      case e.key === "c":
        new Audio(
          "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        ).play();
        console.log("Cev-H2");
        setDrumSoundName("Cev-H2");
        break;
      default:
        break;
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
          .map((row, i) => renderDrumRow(row, i, clickDrumPad))}
      </div>
    </div>
  );
};

export default Drums;
