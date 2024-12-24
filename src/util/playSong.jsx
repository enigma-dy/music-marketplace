const playSong = (url) => {
  const audio = new Audio(url);
  audio.play();
  console.log("Playing song from URL:", url);
};

export default playSong;
