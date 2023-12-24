import React, { useState } from 'react';

const ToggleBackground = () => {
  const [isImage1Visible, setIsImage1Visible] = useState(true);

  const toggleBackground = () => {
    setIsImage1Visible((prev) => !prev);
  };

  const backgroundImageStyle = {
    width: '100%',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'background-image 0.5s ease-in-out',
  };

  if (isImage1Visible) {
    backgroundImageStyle.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6q3vBOTb1m9gsstgdz8TA-JQce0l2Ev0B4w&usqp=CAU")';
  } else {
    backgroundImageStyle.backgroundImage = 'url("https://c4.wallpaperflare.com/wallpaper/728/272/856/download-nature-background-images-1920x1080-wallpaper-preview.jpg")'; 
  }

  return (
    <div style={{textAlign:"center"}}>
      <button onClick={toggleBackground}>Toggle Background</button>
      <div style={backgroundImageStyle}></div>
    </div>
  );
};

export default ToggleBackground;
