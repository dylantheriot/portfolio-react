import React, { useState, useEffect } from 'react';

// images
import TheriotPFP from '../../assets/images/theriot_pfp.png';

// Resume
import Resume from '../../assets/Theriot_Official_Resume.pdf';

// components
import QuickLink from './QuickLink';
import Menu from '../menu/Menu';
import MenuOpen from '../menu/MenuOpen';
import { Link } from 'react-router-dom';

function HomePage() {

  const [menuOpen, setMenuOpen] = useState(() => false);

  return (
    <>
      {
        menuOpen ? <MenuOpen menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> :
          <div className="relative bg-pastelBlue-100 min-h-full w-full bg-height">
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="relative h-full font-avenir">
              <div id="home-page" className="p-2 text-pastelBlue-700 max-w-screen h-full m-auto">
                <div className="text-center md:text-left h-full">
                  <div className="flex flex-col justify-around h-full">
                    <div className="flex flex-col flex-end lg:flex-row-reverse md:w-10/12 m-auto">
                      <div className="flex flex-col w-full lg:w-5/12 h-1/2 items-center justify-center">
                        {/* profile picture */}
                        <div className="relative">
                          <div className="relative z-10">
                            <img id="pfp" className="relative rounded-full border-solid border-pastelBlue-500 border-4 w-auto h-32 md:h-48 lg:h-64" src={TheriotPFP} />
                          </div>
                          <div className="inline-block absolute z-0 rounded-full bg-pastelBlue-800 h-32 md:h-48 lg:h-64 w-32 md:w-48 lg:w-64" style={{ top: '10px', left: '60px' }} >
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full lg:w-7/12">
                        <div className="flex flex-col lg:justify-center h-full">
                          {/* header */}
                          <h1 className="text-4xl md:text-6xl mt-2 md:mt-8 font-bold w-full leading-8">
                            Hello, Internet<span className="text-pastelBlue-500">!</span>
                          </h1>
                          <div className="w-20 md:w-32 h-2 bg-pastelBlue-500 mt-2 md:mt-8 mb-2 m-auto md:ml-0 md:mr-auto"></div>
                          <div className="text-lg md:text-2xl">
                            <p>My name is <strong className="text-xl md:text-3xl">Dylan Theriot</strong>, and I'm a junior Computer Science student at Texas A&M University.</p>
                            <p>I am currently looking for a <strong className="text-xl md:text-3xl">Summer 2021 internship</strong>.</p>
                          </div>
                          {/* quick links */}
                          <br />
                          <div className="w-full">
                            <div className="w-full md:w-1/2">
                              <h2 className="text-2xl md:text-3xl xl:text-4xl w-full"><u>Quick Links</u></h2>
                              <div className="grid md:grid-cols-2 gap-x-64 gap-y-2">
                                <QuickLink
                                  svg={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                  </svg>}
                                  title="Resume"
                                  link={Resume}
                                />
                                <QuickLink
                                  svg={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>}
                                  title="LinkedIn"
                                  link="https://www.linkedin.com/in/dylan-theriot/"
                                />
                                <QuickLink
                                  svg={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>}
                                  title="GitHub"
                                  link="https://github.com/dylantheriot"
                                />
                                <QuickLink
                                  svg={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z" /></svg>}
                                  title="YouTube"
                                  link="https://www.youtube.com/channel/UCDFnmDAXP6B8oHfWUSpes0Q"
                                />
                                <QuickLink
                                  svg={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" height="20" width="20" fill="currentColor" x="0px" y="0px" viewBox="0 0 280.3 242" enableBackground="new 0 0 280.3 242">
                                    <g id="XMLID_1_">
                                      <path id="XMLID_6_" d="M133.7,76H118v90h14.7c30.9,0,45.1-18.1,45.1-45C177.8,90.9,164.9,76,133.7,76z" />
                                      <path id="XMLID_9_" d="M210.2,0H70.1L0,121l70.1,121h140.1l70.1-121L210.2,0z M132.7,195H89V47h45.8c42.1,0,73.3,20.1,73.3,74   C208.1,172.8,170.6,195,132.7,195z" />
                                    </g>
                                  </svg>}
                                  title="Devpost"
                                  link="https://devpost.com/dylantheriot"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center">
                      <Link to="/about">
                      <button className="bg-pastelBlue-500 hover:bg-pastelBlue-700 text-white font-bold py-2 px-4 rounded" style={{ height: 50, marginTop: 10, marginBottom: 30 }}>
                        LEARN MORE ABOUT ME
                </button>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
      }
    </>

  )
}

export default HomePage;