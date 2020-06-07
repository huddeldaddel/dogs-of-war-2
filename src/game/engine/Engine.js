import BackgroundTile from './BackgroundTile';
import InputController from '../InputController';
import PlayerController from '../PlayerController';
import PlayerBehavior from './PlayerBehavior';
import Rectangle from './Rectangle';
import { updatePlayerMovement } from './PlayerMovement';

export const EXPLOSION_HIT_RECT_HEIGHT = 200;
export const EXPLOSION_HIT_RECT_WIDTH = 200;
export const PLAYER_HIT_RECT_HEIGHT = 200;
export const PLAYER_HIT_RECT_WIDTH = 90;
export const SCREEN_SIZE = 1500;

export default class Engine {

  constructor(mission) {
    this.mission = mission;
    this.missionSegment = mission.segments[0];

    this.backgrounds = [
      new BackgroundTile('images/backgrounds/bg-dummy-1.jpg'),
      new BackgroundTile('images/backgrounds/bg-dummy-2.jpg')
    ];
    this.backgrounds[0].offsetY = -600;
    this.backgrounds[1].offsetY = 900;

    this.playerBehaviors = PlayerController.getConfiguredPlayers().map((p) => new PlayerBehavior(p));
    this.playerPositions = PlayerController.getConfiguredPlayers().map(
      (p, idx) => new Rectangle(500 + idx * 500, 1200, PLAYER_HIT_RECT_WIDTH, PLAYER_HIT_RECT_HEIGHT)
    );

    this.explosions = [
      new Rectangle(75, 75, EXPLOSION_HIT_RECT_WIDTH, EXPLOSION_HIT_RECT_HEIGHT)
    ];
  }

  initializeGameState = () => {

  }

  updateGameState = (elapsedTimeInMs) => {
    this.updatePlayerBehaviorByInput();
    this.updatePlayerPositionWithMovement(elapsedTimeInMs);
  }

  updatePlayerBehaviorByInput = () => {
    PlayerController.getRemainingPlayers().forEach((p) => {
      const inputState = InputController.inputProviders[p.index]();
      this.playerBehaviors[p.index].update(inputState);
    });
  }

  updatePlayerPositionWithMovement = (elapsedTimeInMs) => {
    PlayerController.getRemainingPlayers().forEach((p) => {
      const behavior = this.playerBehaviors[p.index];
      if(behavior.moving) {
        const oldPosition = this.playerPositions[p.index];
        this.playerPositions[p.index] = updatePlayerMovement(elapsedTimeInMs, behavior.direction, oldPosition);
      }
    });
  }

}