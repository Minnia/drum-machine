import React from "react";
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

function handleKeyPress(e) {
  if (e.key === "q") {
    new Audio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    ).play();
  }
  if (e.key === "w") {
    new Audio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    ).play();
  }
  if (e.key === "e") {
    new Audio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    ).play();
  }
  if (e.key === "a") {
    new Audio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    ).play();
  }
  if (e.key === "s") {
    new Audio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    ).play();
  }
  if (e.key === "d") {
    new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3").play();
  }
  if (e.key === "z") {
    new Audio(
      "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    ).play();
  }
  if (e.key === "x") {
    new Audio(
      "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    ).play();
  }
  if (e.key === "c") {
    new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3").play();
  }
}

const renderDrumRow = (_, rowIndex) => {
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
          console.log(count);
          return (
            <div key={drumLettersIndex}>
              <DrumPad
                clickColor={drumPadColors[drumLettersIndex]}
                onClick={async () => await sounds[drumLettersIndex].play()}
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
  const rowsOfButtons = 3;
  return (
    <div
      onKeyPress={handleKeyPress}
      id="drum-machine"
      tabIndex={0}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: "100px",
        border: "1px solid black",
        padding: "100px",
        backgroundColor: "black"
      }}
    >
      {Array(rowsOfButtons)
        .fill(0)
        .map((row, i) => renderDrumRow(row, i))}
    </div>
  );
};

export default Drums;
