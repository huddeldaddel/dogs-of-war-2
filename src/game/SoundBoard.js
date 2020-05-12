const TYPE_FX = 'fx';
const TYPE_MUSIC = 'music';

export const FX_CASH = 'cash-register.mp3';
export const FX_ERROR = 'error.mp3';
export const FX_LOADING = 'loading.mp3';
export const FX_DEATH_ENEMY_0 = 'death-enemy-0.mp3';
export const FX_DEATH_ENEMY_1 = 'death-enemy-1.mp3';
export const FX_DEATH_ENEMY_2 = 'death-enemy-2.mp3';
export const FX_DEATH_ENEMY_3 = 'death-enemy-3.mp3';
export const FX_DEATH_ENEMY_4 = 'death-enemy-4.mp3';
export const FX_DEATH_ENEMY_5 = 'death-enemy-5.mp3';
export const FX_DEATH_ENEMY_6 = 'death-enemy-6.mp3';
export const FX_DEATH_ENEMY_7 = 'death-enemy-7.mp3';
export const FX_DEATH_PLAYER_1 = 'death-player-1.mp3';
export const FX_DEATH_PLAYER_2 = 'death-player-2.mp3';
export const FX_TITLE_RIFLE = 'title-rifle.mp3';

export const MUSIC_BACKGROUND_1 = 'All-We-Ever-See-of-Stars.mp3';
export const MUSIC_BACKGROUND_2 = 'Beatdown-City.mp3';
export const MUSIC_BACKGROUND_3 = 'Cracked-Streets-And-Broken-Windows.mp3';
export const MUSIC_BACKGROUND_4 = 'Dance-Harder.mp3';
export const MUSIC_BACKGROUND_5 = 'Die-Historic.mp3';
export const MUSIC_BACKGROUND_6 = 'Drive-Fast.mp3';
export const MUSIC_BACKGROUND_7 = 'Gaining-Traction.mp3';
export const MUSIC_BACKGROUND_8 = 'Heavy-Traffic.mp3';
export const MUSIC_BACKGROUND_9 = 'Hot-Nights-In-Los-Angeles.mp3';
export const MUSIC_BACKGROUND_10 = 'It-Cant-Be-Bargained-With.mp3';
export const MUSIC_BACKGROUND_11 = 'Missing-You.mp3';
export const MUSIC_BACKGROUND_12 = 'Raging-Streets.mp3';
export const MUSIC_THEME = 'The-Only-Me-is-Me.mp3';

class NamedAudio {
  constructor(name, type) {
    this.name = name;
    this.audio = new Audio(`sounds/${type}/${name}`);
    this.audio.loop = TYPE_MUSIC === type;
  }
}

class SoundBoard {

  constructor() {
    this.sounds = [];

    // sound effects
    this.sounds.push(new NamedAudio(FX_CASH, TYPE_FX));
    this.sounds.push(new NamedAudio(FX_ERROR, TYPE_FX));
    this.sounds.push(new NamedAudio(FX_LOADING, TYPE_FX));
    this.sounds.push(new NamedAudio(FX_DEATH_ENEMY_0, TYPE_FX));
    this.sounds.push(new NamedAudio(FX_DEATH_ENEMY_1, TYPE_FX));
    this.sounds.push(new NamedAudio(FX_DEATH_ENEMY_2, TYPE_FX));
    this.sounds.push(new NamedAudio(FX_DEATH_ENEMY_3, TYPE_FX));
    this.sounds.push(new NamedAudio(FX_DEATH_ENEMY_4, TYPE_FX));
    this.sounds.push(new NamedAudio(FX_DEATH_ENEMY_5, TYPE_FX));
    this.sounds.push(new NamedAudio(FX_DEATH_ENEMY_6, TYPE_FX));
    this.sounds.push(new NamedAudio(FX_DEATH_ENEMY_7, TYPE_FX));
    this.sounds.push(new NamedAudio(FX_DEATH_PLAYER_1, TYPE_FX));
    this.sounds.push(new NamedAudio(FX_DEATH_PLAYER_2, TYPE_FX));
    this.sounds.push(new NamedAudio(FX_TITLE_RIFLE, TYPE_FX));

    // music
    this.sounds.push(new NamedAudio(MUSIC_BACKGROUND_1, TYPE_MUSIC));
    this.sounds.push(new NamedAudio(MUSIC_BACKGROUND_2, TYPE_MUSIC));
    this.sounds.push(new NamedAudio(MUSIC_BACKGROUND_3, TYPE_MUSIC));
    this.sounds.push(new NamedAudio(MUSIC_BACKGROUND_4, TYPE_MUSIC));
    this.sounds.push(new NamedAudio(MUSIC_BACKGROUND_5, TYPE_MUSIC));
    this.sounds.push(new NamedAudio(MUSIC_BACKGROUND_6, TYPE_MUSIC));
    this.sounds.push(new NamedAudio(MUSIC_BACKGROUND_7, TYPE_MUSIC));
    this.sounds.push(new NamedAudio(MUSIC_BACKGROUND_8, TYPE_MUSIC));
    this.sounds.push(new NamedAudio(MUSIC_BACKGROUND_9, TYPE_MUSIC));
    this.sounds.push(new NamedAudio(MUSIC_BACKGROUND_10, TYPE_MUSIC));
    this.sounds.push(new NamedAudio(MUSIC_BACKGROUND_11, TYPE_MUSIC));
    this.sounds.push(new NamedAudio(MUSIC_BACKGROUND_12, TYPE_MUSIC));
    this.sounds.push(new NamedAudio(MUSIC_THEME, TYPE_MUSIC));
  }

  getAudioByName = (name) => {
    return this.sounds.find((e) => e.name === name).audio;
  }

  getVolume = (sound) => {
    return this.getAudioByName(sound).volume;
  }

  setVolume = (sound, volume) => {
    try {
      this.getAudioByName(sound).volume = volume;
    } catch (error) {
      // continue regardless of error
    }
  }

  play = (sound) => {
    this.stop(sound);
    try {
      this.getAudioByName(sound).play();
    } catch (error) {
      // continue regardless of error
    }
  }

  stop = (sound) => {
    try {
      const audio = this.getAudioByName(sound);
      audio.pause();
      audio.currentTime = 0;
    } catch (error) {
      // continue regardless of error
    }
  }

}

const soundBoardInstance = new SoundBoard();
export default soundBoardInstance;
