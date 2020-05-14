import React from 'react';
import styles from './MissionBriefing.module.css';
import Missions from '../../game/Missions';

function MissionBriefing(props) {
  if(!props.mission) {
    return (
      <div className={ styles.missionBriefingEmpty }>
        <div className={ styles.space0 } />
        <h1>Missions available</h1>
      </div>
    );
  } else {
    const mission = Missions.find((m) => m.name === props.mission);
    return (
      <div className={ styles.missionBriefingSelected }>
        <img src={mission.client} alt="client"/>
        <p>{ mission.briefing }</p>
      </div>
    );
  }
}

export default MissionBriefing;