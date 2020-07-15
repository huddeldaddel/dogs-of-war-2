import { Directions } from "./Directions";
import { Player } from "../Player";
import InputState from "../InputState";

export default class PlayerBehavior {
  player: Player;
  direction: Directions;
  moving: boolean;
  firing: boolean; // will be true as long as the player keeps the trigger pressed
  triggeredFire: boolean; // will be true only when switching from "not firing" to "firing"
  nextWeapon: boolean;
  previousWeapon: boolean;

  constructor(player: Player) {
    this.player = player;
    this.direction = Directions.Up;
    this.moving = false;
    this.firing = false;
    this.triggeredFire = false;
    this.nextWeapon = false;
    this.previousWeapon = false;
  }

  update = (userInput: InputState) => {
    if (!userInput || !this.player.isAlive()) {
      return;
    }

    const playerWantsToMove =
      userInput.moveUp ||
      userInput.moveDown ||
      userInput.moveLeft ||
      userInput.moveRight;
    this.moving = playerWantsToMove && !(!this.moving && this.firing);
    this.triggeredFire = !this.firing && userInput.fire;
    this.firing = userInput.fire;
    if (playerWantsToMove) {
      this.direction = this.getDirection(
        userInput.moveUp,
        userInput.moveDown,
        userInput.moveLeft,
        userInput.moveRight
      );
    }

    if (!this.nextWeapon && userInput.toggleUp) {
      this.player.selectNextWeapon();
    }
    this.nextWeapon = userInput.toggleUp;

    if (!this.previousWeapon && userInput.toggleDown) {
      this.player.selectPreviousWeapon();
    }
    this.previousWeapon = userInput.toggleDown;
  };

  getDirection = (
    up: boolean,
    down: boolean,
    left: boolean,
    right: boolean
  ): Directions => {
    if (up && !down && !left && !right) {
      return Directions.Up;
    }
    if (up && !down && left && !right) {
      return Directions.UpLeft;
    }
    if (up && !down && !left && right) {
      return Directions.UpRight;
    }
    if (!up && down && !left && !right) {
      return Directions.Down;
    }
    if (!up && down && left && !right) {
      return Directions.DownLeft;
    }
    if (!up && down && !left && right) {
      return Directions.DownRight;
    }
    if (!up && !down && left && !right) {
      return Directions.Left;
    }
    if (!up && !down && !left && right) {
      return Directions.Right;
    }
    return this.direction;
  };
}