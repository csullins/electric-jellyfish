import React from 'react';
import { AboutWrapper, VideoWrapper, OverlayText, BioPhoto} from '../../styles/AboutStyles';
import me from '../../assets/images/me.jpeg'
import bubbleVid from '../../assets/images/bubbles.mp4'

export default function About() {
  return (
<AboutWrapper>
        
      <VideoWrapper autoPlay muted loop>
        <source src={bubbleVid} type="video/mp4" />
      </VideoWrapper>

      <OverlayText> My name is Camile, I'm a web developer.</OverlayText>
      <section className='bio-section'>
        <BioPhoto src={me} alt="profile image" />
        <p className='bio'>I'm Camile, a passionate web developer. Specializing in design and UI, I love tackling challenges and finding innovative solutions to the way websites are displayed. I thrive in collaborative environments and value continuous learning to stay at the forefront of industry trends.
       <hr></hr>
        Beyond my professional pursuits, I enjoy running, hiking, exploring breweries and hanging out with my dogs which fuel my creativity and provide a fresh perspective. I'm excited to contribute my skills and enthusiasm to projects with a positive impact. If you'd like to connect or discuss potential collaborations, please reach out. Let's explore new opportunities together!</p>
      </section>
    

    </AboutWrapper>

  );
}
