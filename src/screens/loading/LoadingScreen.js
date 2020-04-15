import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';
import { START_SCREEN_NAME } from '../start/StartScreen';
import SoundBoard, { FX_LOADING } from '../../game/SoundBoard';

function LoadingScreen(props) {
  const [height, setHeight] = useState(100);

  useEffect(() => { 
    setHeight(window.innerHeight / 2 - 80);
    SoundBoard.play(FX_LOADING);
  }, []);

  function moveToNextScreen() {
    props.onScreenChangeRequired(START_SCREEN_NAME);
  }

  setTimeout(moveToNextScreen, 8000);

  return (
    <div className="loading-screen">
      <div style={{ height: height + "px" }} />
      <h1>DOGS OF WAR II</h1>
      <h1>is loading</h1>
    </div>
  );
}

export const LOADING_SCREEN_NAME = "loading";
export default LoadingScreen;