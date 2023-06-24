import React from 'react';
import { AboutWrapper, VideoWrapper, OverlayText} from '../../styles/AboutStyles';

import bubbleVid from '../../assets/images/bubbles.mp4'

export default function About() {
  return (
<AboutWrapper>
        
      <VideoWrapper autoPlay muted loop>
        <source src={bubbleVid} type="video/mp4" />
      </VideoWrapper>


      <OverlayText> My name is Camile, I'm a web developer.</OverlayText>
    

    </AboutWrapper>

  );
}
