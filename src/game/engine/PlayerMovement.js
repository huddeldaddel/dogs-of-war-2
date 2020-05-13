import {
  DIRECTION_DOWN,
  DIRECTION_DOWN_LEFT,
  DIRECTION_DOWN_RIGHT,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
  DIRECTION_UP_LEFT,
  DIRECTION_UP_RIGHT
} from './Directions';
import {PLAYER_HEIGHT, PLAYER_WIDTH, SCREEN_SIZE} from './Tiles';
import Rectangle from './Rectangle';

export const MIN_PLAYER_DISTANCE_TO_BORDER = 25;

export function getMovementDistance(elapsedTimeInMs) {
  // Screen.width = 1500 / 2.000 milliseconds = 0.75 px / ms
  return elapsedTimeInMs * 0.75;
}

export function getMovementX(elapsedTimeInMs, direction) {
  const distanceExact = getMovementDistance(elapsedTimeInMs);
  const diagonalDistance = Math.round(Math.sqrt((distanceExact * distanceExact) / 2));
  const distance = Math.round(distanceExact);
  switch(direction) {
    case DIRECTION_UP: return 0;
    case DIRECTION_UP_RIGHT: return diagonalDistance;
    case DIRECTION_RIGHT: return distance;
    case DIRECTION_DOWN_RIGHT: return diagonalDistance;
    case DIRECTION_DOWN: return 0;
    case DIRECTION_DOWN_LEFT: return diagonalDistance * -1;
    case DIRECTION_LEFT: return distance * -1;
    case DIRECTION_UP_LEFT: return diagonalDistance * -1;
    default: return 0;
  }
}

export function getMovementY(elapsedTimeInMs, direction) {
  const distanceExact = getMovementDistance(elapsedTimeInMs);
  const diagonalDistance = Math.round(Math.sqrt((distanceExact * distanceExact) / 2));
  const distance = Math.round(distanceExact);
  switch(direction) {
    case DIRECTION_UP: return distance * -1;
    case DIRECTION_UP_RIGHT: return diagonalDistance * -1;
    case DIRECTION_RIGHT: return 0;
    case DIRECTION_DOWN_RIGHT: return diagonalDistance;
    case DIRECTION_DOWN: return distance;
    case DIRECTION_DOWN_LEFT: return diagonalDistance;
    case DIRECTION_LEFT: return 0;
    case DIRECTION_UP_LEFT: return diagonalDistance * -1;
    default: return 0;
  }
}

export function limitPlayerMovementToScreenArea(position) {
  if(position.x < MIN_PLAYER_DISTANCE_TO_BORDER) {
    position.x = MIN_PLAYER_DISTANCE_TO_BORDER;
  }
  if(position.x > SCREEN_SIZE - MIN_PLAYER_DISTANCE_TO_BORDER - PLAYER_WIDTH) {
    position.x = SCREEN_SIZE - MIN_PLAYER_DISTANCE_TO_BORDER - PLAYER_WIDTH;
  }
  if(position.y < MIN_PLAYER_DISTANCE_TO_BORDER) {
    position.y = MIN_PLAYER_DISTANCE_TO_BORDER;
  }
  if(position.y > SCREEN_SIZE - MIN_PLAYER_DISTANCE_TO_BORDER - PLAYER_HEIGHT) {
    position.y = SCREEN_SIZE - MIN_PLAYER_DISTANCE_TO_BORDER - PLAYER_HEIGHT;
  }
  return position;
}

export function updatePlayerMovement(elapsedTimeInMs, direction, oldPosition) {
  const result = new Rectangle(oldPosition.x, oldPosition.y, oldPosition.width, oldPosition.height);
  result.x += getMovementX(elapsedTimeInMs, direction);
  result.y += getMovementY(elapsedTimeInMs, direction);
  return limitPlayerMovementToScreenArea(result);
}