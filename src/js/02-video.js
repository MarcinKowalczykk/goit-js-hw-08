import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const vimeoPlayer = new Vimeo('vimeo-player', {
  id: 236203659,
});

const resumeVideoFromLocalStorage = async () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime !== null) {
    await vimeoPlayer.setCurrentTime(parseFloat(currentTime));
  }
};

vimeoPlayer.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);

window.addEventListener('DOMContentLoaded', () => {
  resumeVideoFromLocalStorage();
});
