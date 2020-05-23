export const DEFAULT_SETTINGS = {
  is_playing: false,
  paused: false,
  playbackRate: 1,
  track_name: '',
  duration: 0,
  currentTime: 0,
  volume: 0.1,
  source: 'a',
}

export function changeSettings(type, value, config) {
  switch (type) {
    case 'TOGGLE_PLAY':
      return {
        ...config,
        is_playing: !config.is_playing,
        paused: config.is_playing,
      }

    case 'VOLUME':
      return { ...config, volume: value }

    case 'TRACK':
      return {
        ...config,
        currentTime: 0,
        is_playing: true,
        paused: false,
        source: value.source,
        track_name: value.name,
      }

    case 'TIME':
      let currentTime = config.currentTime

      if (value === 'backwards') {
        currentTime -= 30
      } else if (value === 'forward') {
        currentTime += 30
      } else {
        currentTime = value
      }

      return { ...config, currentTime }

    case 'SPEED':
      let playbackRate = config.playbackRate

      if (value === 'fast') {
        if (playbackRate < 3) playbackRate += 0.5
      } else if (playbackRate > 0.5) {
        playbackRate -= 0.5
      }

      return { ...config, playbackRate }

    default:
      return config
  }
}
