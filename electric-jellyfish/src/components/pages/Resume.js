import React from 'react';
import '../../styles/resume.css';
import me from '../../assets/images/me.jpeg'
export default function Resume() {
    return (
      <div className="resume">
         <div className="resume_left">
           <div className="resume_profile">
             <img src={me} alt="profile_pic"/>
           </div>
           <div className="resume_content">
             <div className="resume_item resume_info">
               <div className="title">
                 <p className="bold">Camile Sullins</p>
                 <p className="regular">Designer</p>
               </div>
               <ul>
                 <li>
                   <div className="icon">
                     <i className="fas fa-map-signs"></i>
                   </div>
                   <div className="data">
                     123 Street, Texas <br /> USA
                   </div>
                 </li>
                 <li>
                   <div className="icon">
                     <i className="fas fa-mobile-alt"></i>
                   </div>
                   <div className="data">
                     +123 456 7891
                   </div>
                 </li>
                 <li>
                   <div className="icon">
                     <i className="fas fa-envelope"></i>
                   </div>
                   <div className="data">
                     filler@gmail.com
                   </div>
                 </li>
                 <li>
                   <div className="icon">
                     <i className="fab fa-weebly"></i>
                   </div>
                   <div className="data">
                     www.example.com
                   </div>
                 </li>
               </ul>
             </div>
             <div className="resume_item resume_skills">
               <div className="title">
                 <p className="bold">skills</p>
               </div>
               <ul>
                 <li>
                   <div className="skill_name">
                     HTML
                   </div>
                   <div className="skill_progress">
                     <span style={{ width: '90%' }}></span>
                   </div>
                   <div className="skill_per">90%</div>
                 </li>
                 <li>
                   <div className="skill_name">
                     CSS
                   </div>
                   <div className="skill_progress">
                   <span style={{ width: '80%' }}></span>
                   </div>
                   <div className="skill_per">80%</div>
                 </li>
                 <li>
                   <div className="skill_name">
                     SASS
                   </div>
                   <div className="skill_progress">
                   <span style={{ width: '90%' }}></span>
                   </div>
                   <div className="skill_per">90%</div>
                 </li>
                 <li>
                   <div className="skill_name">
                     JS
                   </div>
                   <div className="skill_progress">
                   <span style={{ width: '70%' }}></span>
                   </div>
                   <div className="skill_per">70%</div>
                 </li>
                 <li>
                   <div className="skill_name">
                     REACT
                   </div>
                   <div className="skill_progress">
                   <span style={{ width: '70%' }}></span>
                   </div>
                   <div className="skill_per">70%</div>
                 </li>
               </ul>
             </div>
             <div className="resume_item resume_social">
               <div className="title">
                 <p className="bold">Social</p>
               </div>
               <ul>
                 <li>
                   <div className="icon">
                     <i className="fab fa-facebook-square"></i>
                   </div>
                   <div className="data">
                     <p className="semi-bold">Facebook</p>
                     <p>filler@facebook</p>
                   </div>
                 </li>
                 <li>
                   <div className="icon">
                     <i className="fab fa-twitter-square"></i>
                   </div>
                   <div className="data">
                     <p className="semi-bold">Twitter</p>
                     <p>filler@twitter</p>
                   </div>
                 </li>
                 <li>
                   <div className="icon">
                     <i className="fab fa-youtube"></i>
                   </div>
                   <div className="data">
                     <p className="semi-bold">Youtube</p>
                     <p>filler@youtube</p>
                   </div>
                 </li>
                 <li>
                   <div className="icon">
                     <i className="fab fa-linkedin"></i>
                   </div>
                   <div className="data">
                     <p className="semi-bold">Linkedin</p>
                     <p>filler@linkedin</p>
                   </div>
                 </li>
               </ul>
             </div>
           </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
              <div className="title">
                 <p className="bold">Headline</p>
               </div>
              <p>Welcome to my resume, I've added filler text to this page for assignment completion purposes. More to come soon! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis illo fugit officiis distinctio culpa officia totam atque exercitationem inventore repudiandae?</p>
          </div>
          <div className="resume_item resume_work">
              <div className="title">
                 <p className="bold">Work Experience</p>
               </div>
              <ul>
                  <li>
                      <div className="date">2013 - 2015</div> 
                      <div className="info">
                           <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                      </div>
                  </li>
                  <li>
                    <div className="date">2015 - 2017</div>
                    <div className="info">
                           <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                      </div>
                  </li>
                  <li>
                    <div className="date">2017 - Present</div>
                    <div className="info">
                           <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                      </div>
                  </li>
              </ul>
          </div>
          <div className="resume_item resume_education">
            <div className="title">
                 <p className="bold">Education</p>
               </div>
            <ul>
                  <li>
                      <div className="date">2010 - 2013</div> 
                      <div className="info">
                           <p className="semi-bold">Web Designing (Texas University)</p> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                      </div>
                  </li>
                  <li>
                    <div className="date">2000 - 2010</div>
                    <div className="info">
                           <p className="semi-bold">Texas International School</p> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                      </div>
                  </li>
              </ul>
          </div>
          <div className="resume_item resume_hobby">
            <div className="title">
                 <p className="bold">Hobbies</p>
               </div>
             <ul>
               <li><i className="fas fa-book"></i></li>
               <li><i className="fas fa-gamepad"></i></li>
               <li><i className="fas fa-music"></i></li>
               <li><i className="fab fa-pagelines"></i></li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

