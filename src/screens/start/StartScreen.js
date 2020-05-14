import React, { useEffect } from 'react';
import styles from './StartScreen.module.css';
import { TITLE_SCREEN_NAME } from '../title/TitleScreen';
import MissionController from '../../game/MissionController';

function StartScreen(props) {

  useEffect(() => { 
    MissionController.reset();
  });

  function moveToNextScreen() {
    props.onScreenChangeRequired(TITLE_SCREEN_NAME);
  }

  setTimeout(moveToNextScreen, 2000);

  return (
    <div className={ styles.screen }>
      <div className={ styles.space0 } />
      <h1>DOGS OF WAR II</h1>

      <div className={ styles.space1 } />
      <p className={ styles.copyright }>(C) 2020 THOMAS WERNER</p>

      <div className={ styles.space2 } />
      <p className={ styles.inspiredBy }>
          Dedicated to Jonathan Werner
      </p>
      <p className={ styles.inspiredBy }>
         Inspired by "DOGS OF WAR"<br />
         (C) 1989 by Elite Systems Ltd.
      </p>
    </div>
  );
}

export const START_SCREEN_NAME = 'start';
export default StartScreen;
