import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { Howl } from 'howler';
import sound1 from '../sounds/switchone.mp3';
import sound2 from '../sounds/switchtwo.mp3';
import { useEffect } from 'react';
export const SoundContext = createContext();

const SoundContextProvider = (props) => {
    
    const [toggle, setToggle] = useState(localStorage.getItem('toggle') === "true");

    const soundSrc = toggle ? sound1 : sound2;

  const callMySound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  }

  useEffect(() => {
    localStorage.setItem('toggle', toggle);

    }, [toggle]);

    return ( 
        <SoundContext.Provider value={{toggle, setToggle, callMySound, soundSrc}}>
            {props.children}
        </SoundContext.Provider>
     );
}
 
export default SoundContextProvider;