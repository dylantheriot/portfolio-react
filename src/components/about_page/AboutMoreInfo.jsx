import React from 'react';
import GeneralSpacing from '../shared/GeneralSpacing';
import { Link } from 'react-router-dom';
import { BounceInLeft, BounceInRight, PopIn } from 'react-spring-pop';

function AboutMoreInfo() {
  return (
    <div id="about-more-info" className="flex flex-col text-base md:text-xl lg:text-2xl">
      <div>
        {/* Education */}
        <BounceInLeft threshold={0.7} once={true}>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col w-full lg:w-2/3">
            <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold">
              <span className="text-pastelPurple-500">-</span>Education<span className="text-pastelPurple-500">-</span>
            </h2>
            <p>
              I am a <strong>junior computer science</strong> student at <strong>Texas A&M University</strong> with a minor in <strong>cybersecurity</strong>. I am a member of <strong><a className="hover:underline text-pastelPurple-500" target="_blank" href="https://www.tbp.org/">Tau Beta Pi</a></strong> Engineering Honor Society, Texas A&M <strong><a className="hover:underline text-pastelPurple-500" target="_blank" href="https://engineering.tamu.edu/academics/eh/index.html">Engineering Honors</a></strong> and the first cohort of <strong><a className="hover:underline text-pastelPurple-500" target="_blank" href="https://brockmanfoundation.org/">Brockman Scholars</a></strong>. In high school, I was a National Merit Scholar and the salutatorian of my class of 592 students. I am a <strong>lifelong learner</strong> and hope to continue growing both academically and personally.
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-center lg:pl-8">
            <img className="rounded-lg border-4 w-full md:w-1/2 lg:w-full md:mb-4 lg:mb-0 border-solid border-pastelPurple-500 shadow shadow-lg" src={require('../../assets/images/about_page/tamu.jpg')} />
          </div>
        </div>
        </BounceInLeft>
        <GeneralSpacing />
        {/* Fullstack Engineer */}
        <BounceInRight threshold={0.7} once={true}>
        <div className="flex flex-col-reverse lg:flex-row-reverse">
          <div className="flex flex-col w-full lg:w-2/3 lg:pl-12">
            <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold">
              <span className="text-pastelPurple-500">-</span>Fullstack Engineer<span className="text-pastelPurple-500">-</span>
            </h2>
            <p>
              My experience has both breadth and depth in different aspects of software development. From fullstack architectures like <strong>MERN</strong>, to frontend frameworks like <strong>Flutter/Dart</strong>, I enjoy all aspects of software engineering. I have multiple experiences <strong>leading a team</strong> and utilizing agile development. I enjoy working more on the <strong>front-end</strong>, but back-end architecture and devops is also really fun.  
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-center lg:pl-8">
            <img className="rounded-lg border-4 w-full md:w-1/2 lg:w-full md:mb-4 md:w-1/2 border-solid border-pastelPurple-500 shadow shadow-lg" src={require('../../assets/images/about_page/fullstack.png')} />
          </div>
        </div>
        </BounceInRight>
        <GeneralSpacing />
        {/* Hacker */}
        <BounceInLeft once={true} threshold={0.7}>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col w-full lg:w-2/3">
            <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold">
              <span className="text-pastelPurple-500">-</span>Hacker<span className="text-pastelPurple-500">-</span>
            </h2>
            <p>
              No... Not that hacking. Rather, I am a huge hackathon enthusiast. As part of the <strong>TAMUhack</strong> and <strong>Chillennium</strong> team, I help host three hackathons each year at Texas A&M University. After going to my first hackathon in my first month of freshman year, I was hooked. As of today, I have competed in <strong>fifteen hackathons</strong> and don't have any plans to stop. I've won awards ranging from <strong>First Place</strong>, to <strong>Best UI/UX</strong>, to <strong>Most Impactful</strong>. You can check out my hackathon projects and awards on my <strong><a className="hover:underline text-pastelPurple-500" target="_blank" href="https://devpost.com/dylantheriot">Devpost</a></strong>.
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-center lg:pl-8">
            <img className="rounded-lg border-4 w-full md:w-1/2 lg:w-full md:mb-4 lg:mb-0 border-solid border-pastelPurple-500 shadow shadow-lg" src={require('../../assets/images/about_page/hacker.jpg')} />
          </div>
        </div>
        </BounceInLeft>
        <GeneralSpacing />
        {/* Hobbies */}
        <BounceInRight threshold={0.7} once={true}>
        <div className="flex flex-col-reverse lg:flex-row-reverse">
          <div className="flex flex-col w-full lg:w-2/3 lg:pl-12">
            <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold">
              <span className="text-pastelPurple-500">-</span>Hobbies<span className="text-pastelPurple-500">-</span>
            </h2>
            <p>
              In my free time, I enjoy playing ping pong, learning the ukulele, reading, and gaming. I have recently taken up <strong>photography</strong> and <strong>videography</strong> and hope to get more into the <strong>tech YouTube space</strong>. Check out my <strong><a className="hover:underline text-pastelPurple-500" target="_blank" href="https://www.youtube.com/channel/UCDFnmDAXP6B8oHfWUSpes0Q">YouTube channel</a></strong>, and if you enjoy my content feel free to like, comment, and subscribe! 
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-center lg:pl-8">
            <img className="rounded-lg border-4 w-full md:w-1/2 lg:w-full md:mb-4 md:w-1/2 border-solid border-pastelPurple-500 shadow shadow-lg" src={require('../../assets/images/about_page/hobbies.JPG')} />
          </div>
        </div>
        </BounceInRight>
        <GeneralSpacing />
        {/* Contact Info */}
        <PopIn once={true} threshold={0.7}>
        <div className="flex flex-col-reverse lg:flex-row-reverse text-center">
          <div className="flex flex-col w-full">
            <h2 className="text-3xl text-center md:text-5xl font-bold">
              <span className="text-pastelPurple-500">-</span>Contact Me<span className="text-pastelPurple-500">-</span>
            </h2>
            <p>
            Email: <strong><a className="hover:underline text-pastelPurple-500" href="mailto:dylantheriot@tamu.edu">dylantheriot@tamu.edu</a></strong>
            <br />
            Phone: <strong><a className="hover:underline text-pastelPurple-500" href="tel:832-563-7508">(832) 563-7508</a></strong>
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center pt-8">
            <Link to="/portfolio">
              <button className="bg-pastelPurple-500 hover:bg-pastelPurple-700 text-white font-bold py-2 px-4 rounded text-base" style={{ height: 50, marginTop: 10, marginBottom: 30 }}>
                VIEW MY PROJECTS
              </button>
            </Link>
          </div>
      </PopIn>
      </div>
      
    </div>
  );
}

export default AboutMoreInfo;