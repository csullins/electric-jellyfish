import React from 'react';
import '../../styles/about.css'
import me from '../../assets/images/me.jpeg'

export default function About() {
  return (
<div className='about-wrapper'>
  <h1 className='about-header'>
      Camile Sullins
  </h1>

  <section className='bio-section'>
    <img className='profile-photo' src={me} alt="profile" />

    <p className='bio'>I'm Camile, a passionate web developer. Specializing in design and UI, I love tackling challenges and finding innovative solutions to the way websites are displayed. I thrive in collaborative environments and value continuous learning to stay at the forefront of industry trends.
    <hr></hr>
    Beyond my professional pursuits, I enjoy running, hiking, exploring breweries and hanging out with my dogs which fuel my creativity and provide a fresh perspective. I'm excited to contribute my skills and enthusiasm to projects with a positive impact. If you'd like to connect or discuss potential collaborations, please reach out. Let's explore new opportunities together!</p>
  </section>
</div>

  );
}
