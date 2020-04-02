import React, { useEffect } from 'react';
import './StartScreen.css';
import { TITLE_SCREEN_NAME } from '../title/TitleScreen';
import { MUSIC_THEME } from '../../game/SoundBoard';
import MissionController from '../../game/MissionController';
import SoundBoard from '../../game/SoundBoard';

function StartScreen(props) {

  useEffect(() => { 
    MissionController.reset();
  });

  function moveToNextScreen() {
    props.onScreenChangeRequired(TITLE_SCREEN_NAME);
  }

  function playTheme() {
    SoundBoard.play(MUSIC_THEME);
  }
  
  setTimeout(playTheme, 1250);
  setTimeout(moveToNextScreen, 2000);

  return (
    <div className="start-screen">
      <div className="space-0" />
      <h1>DOGS OF WAR II</h1>

      <div className="space-1" />
      <p className="copyright">(C) 2020 THOMAS WERNER</p>

      <div className="space-2" />
      <p className="inspired-by">
          Dedicated to Jonathan Werner
      </p>
      <p className="inspired-by">
         Inspired by "DOGS OF WAR"<br />
         (C) 1989 by Elite Systems Ltd.
      </p>
    </div>
  );
}

export const START_SCREEN_NAME = "start";
export default StartScreen;