import React from 'react';
import GeneralSpacing from '../shared/GeneralSpacing';
import { PopInLeft, PopInRight, PopInBottom } from 'react-spring-pop';

function ServiceMoreInfo() {
  
  function handleClick(link) {
    window.open(link);
  }

  return (
    <div id="about-more-info" className="flex flex-col text-base md:text-xl lg:text-2xl">
      <div>
        {/* TAMUhack */}
        <PopInLeft once={true} threshold={0.5}>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col w-full lg:w-2/3">
            <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold">
              TAMUhack<span className="text-pastelBrown-500">--</span>
            </h2>
            <p className="text-lg md:text-xl text-center md:text-left">
              <strong>Director</strong>
            </p>
            <p>
            As an avid hacker myself, I wanted to give back to the hackathon community. I joined the TAMUhack team with the purpose of <strong>promoting diversity</strong> in computer science, encouraging <strong>technological pursuits</strong>, and facilitating <strong>groundbreaking ideas</strong>. I want to help others find a passion and love for software engineering through the creative, exciting atmosphere of hackathons and workshops.
            </p>
            <button onClick={() => {handleClick('https://tamuhack.com')}} className="mt-4 mr-4 px-4 py-2 bg-pastelBrown-800 text-white rounded-lg focus:outline-none hover:bg-pastelBrown-300">Website</button>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-center lg:pl-8">
            <img className="rounded-lg border-4 w-full md:w-1/2 lg:w-full md:mb-4 lg:mb-0 border-solid border-pastelBrown-500 shadow shadow-lg" src={require(`../../assets/images/services_page/tamuhack.jpg`)} />
          </div>
        </div>
        </PopInLeft>
        <GeneralSpacing />
        {/* SEC */}
        <PopInRight once={true} threshold={0.5}>
        <div className="flex flex-col-reverse lg:flex-row-reverse">
          <div className="flex flex-col w-full lg:w-2/3 lg:pl-12">
            <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold">
              Student Engineers' Council<span className="text-pastelBrown-500">--</span>
            </h2>
            <p className="text-lg md:text-xl text-center md:text-left">
              <strong>Systems Administration Chair</strong>
            </p>
            <p>
            The Student Engineers' Council is the representative body for all students in the College of Engineering. I joined as a member to help promote the missions to be the <strong>representative voice</strong>, to increase <strong>engineering awareness</strong>, and to foster <strong>professional advancement</strong>. Whether it's volunteering with younger students to display the wonders of engineering, or helping with outreach and events to better the lives of student engineers, SEC has allowed me to give back to my community. As the SysAdmin chair, I lead a team of 12 in developing and maintaining all relevant SEC technologies. This further allows me to give back to SEC and my fellow students.
            </p>
            <button onClick={() => {handleClick('https://sec.tamu.edu')}} className="mt-4 mr-4 px-4 py-2 bg-pastelBrown-800 text-white rounded-lg focus:outline-none hover:bg-pastelBrown-300">Website</button>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-center lg:pl-8">
            <img className="rounded-lg border-4 w-full md:w-1/2 lg:w-full md:mb-4 md:w-1/2 border-solid border-pastelBrown-500 shadow shadow-lg" src={require(`../../assets/images/services_page/sec.png`)} />
          </div>
        </div>
        </PopInRight>
        <GeneralSpacing />
        {/* Chillennium */}
        <PopInBottom once={true} threshold={0.5}>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col w-full lg:w-2/3">
            <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold">
              Chillennium<span className="text-pastelBrown-500">--</span>
            </h2>
            <p className="text-lg md:text-xl text-center md:text-left">
              <strong>Digital Media Chair</strong>
            </p>
            <p>
              Chillennium was the very first hackathon I went to, and I was immediately hooked. Similar to my experience with TAMUhack, I joined the Chillennium team to help promote game dev and game creativity. This tends to outreach beyond just engineers, as musicians, artists, designers, and engineers all participate in the annual Chillennium Game Jam. It provides me a way to give back to a community I don't normally get to interact with, and it's been amazing getting to help promote interest in game development.
            </p>
            <button onClick={() => {handleClick('http://chillennium.com/')}} className="mt-4 mr-4 px-4 py-2 bg-pastelBrown-800 text-white rounded-lg focus:outline-none hover:bg-pastelBrown-300">Website</button>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-center lg:pl-8">
            <img className="rounded-lg border-4 w-full md:w-1/2 lg:w-full md:mb-4 lg:mb-0 border-solid border-pastelBrown-500 shadow shadow-lg" src={require(`../../assets/images/services_page/chillennium.jpg`)} />
          </div>
        </div>
        </PopInBottom>
        <GeneralSpacing />
      </div>
    </div>
  );
}

export default ServiceMoreInfo;