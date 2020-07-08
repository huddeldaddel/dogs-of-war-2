import React, { useState } from "react";

import { MAP_SCREEN_NAME } from "../map/MapScreen";
import UserInput from "./UserInput";
import Result from "./Result";
import PlayerController from "../../game/PlayerController";

function ConfigurationScreen(props) {
  const [numberOfPlayers, setNumberOfPlayers] = useState(null);

  function moveToNextScreen() {
    props.onScreenChangeRequired(MAP_SCREEN_NAME);
  }

  function numberOfPlayerSelected(number) {
    setNumberOfPlayers(number);
    PlayerController.numberOfPlayers = number;
    setTimeout(moveToNextScreen, 3000);
  }

  return (
    <>
      {null === numberOfPlayers ? (
        <UserInput onPlayersSelected={numberOfPlayerSelected} />
      ) : (
        <Result numberOfPlayers={numberOfPlayers} />
      )}
    </>
  );
}

export const CONFIGURATION_SCREEN_NAME = "configuration";
export default ConfigurationScreen;
