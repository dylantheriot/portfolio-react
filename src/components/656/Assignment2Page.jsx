import React, { useState, useRef } from "react";
import MenuWrapper from "../menu/MenuWrapper";
import { useSpring, useChain, animated } from "react-spring";
import {
  useFadeInAnimationRef,
  useFadeInLeftRef,
  useWidthExtendAnimation,
  useFadeInDownRef,
} from "../shared/Animations";
import TheriotPFP from "../../assets/images/theriot_pfp.png";
import { PopInLeft, PopInRight, PopInBottom } from "react-spring-pop";
import { Link } from 'react-router-dom';

function Assignment2Content() {
  const title = useRef();
  const description = useRef();
  const bar = useRef();
  const scroll = useRef();
  const scrollBar = useRef();
  const pfp = useRef();

  const titleSpring = useFadeInAnimationRef(title);
  const barSpring = useWidthExtendAnimation(bar);
  const pfpSpring = useFadeInDownRef(pfp);
  const descriptionSpring = useFadeInDownRef(description);

  const scrollSpring = useFadeInDownRef(scroll);
  const scrollBarSpring = useFadeInAnimationRef(scrollBar);

  useChain(
    [pfp, title, bar, description, scroll, scrollBar],
    [0, 0, 0, 0.4, 0.5, 0.6]
  );

  return (
    <div
      id="about-page"
      className="p-2 text-pastelBlue-700 w-auto text-lg md:text-2xl"
    >
      <div className="container px-4 md:px-8 mx-auto w-auto">
        <div
          id="about-intro"
          className="relative h-auto"
          style={{ marginTop: "10vh" }}
        >
          <animated.h1
            style={titleSpring}
            className="text-4xl md:text-6xl mt-2 md:mt-8 font-bold w-full leading-8"
          >
            Assignment 2<span className="text-pastelBlue-500"></span>
          </animated.h1>
          <animated.div
            style={barSpring}
            className="w-20 md:w-32 h-2 bg-pastelBlue-500 mt-2 md:mt-8 mb-2 md:ml-0 md:mr-auto"
          ></animated.div>
          <animated.p style={descriptionSpring}>
            Several themes emerged when reading my classmates' pages. First, I noticed how most people took this course to learn about the <strong>intersection between computers and media</strong>. There was this common idea of people wanting to learn more about society and its interactions/history with computers. Additionally, a lot of people took this course to learn about <strong>media</strong> in general. Whether it was to learn about past media, new media, or how media affects society today, a general emphasis on the interest in media was expressed throughout the web pages. See below for more specific media elements that were common among my classmates. 
          </animated.p>
          <div className="mt-8 lg:mt-32 min-h-auto about-scroll text-center flex flex-col items-center">
            <animated.p style={scrollSpring}>SCROLL</animated.p>
            <animated.div
              style={scrollBarSpring}
              className="vertical-line bg-pastelBlue-900 scroll-bar-height"
            ></animated.div>
          </div>
          {/* additional info */}
          <PopInLeft once={true} threshold={0.5}>
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="flex flex-col w-full lg:w-2/3">
                <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold underline">
                  Common Media Usage
                </h2>
                <div className="my-4">
                  <h3 className="underline font-bold">Cellphone</h3>
                  <ul>
                    <li>- Social Media</li>
                    <ul className="pl-4">
                      <li>- <a className="underline" href="https://snapchat.com" target="_blank">Snapchat</a></li>
                      <li>- <a className="underline" href="https://instagram.com" target="_blank">Instagram</a></li>
                      <li>- <a className="underline" href="https://tiktok.com" target="_blank">TikTok</a></li>
                      <li>- <a className="underline" href="https://discord.com" target="_blank">Discord</a></li>
                    </ul>
                    <li>- Communication</li>
                    <ul className="pl-4">
                      <li>- Texting</li>
                      <li>- FaceTime</li>
                    </ul>
                  </ul>
                </div>
                <div className="my-4">
                  <h3 className="underline font-bold">Movies/TV Shows</h3>
                  <ul>
                    <li>- <a className="underline" href="https://netflix.com" target="_blank">Netflix</a></li>
                    <li>- <a className="underline" href="https://crunchyroll.com" target="_blank">Crunchyroll</a></li>
                    <li>- <a className="underline" href="https://disneyplus.com" target="_blank">Disney+</a></li>
                    <li>- <a className="underline" href="https://youtube.com" target="_blank">YouTube</a></li>
                  </ul>
                </div>
                <div className="my-4">
                  <h3 className="underline font-bold">Music</h3>
                  <ul>
                    <li>- <a className="underline" href="https://spotify.com" target="_blank">Spotify</a></li>
                    <li>- <a className="underline" href="https://www.apple.com/apple-music/" target="_blank">Apple Music</a></li>
                  </ul>
                </div>
                <div className="my-4">
                  <h3 className="underline font-bold">Computer Games</h3>
                  <ul>
                    <li>- MOBA</li>
                    <ul className="pl-4">
                      <li>- <a className="underline" href="https://www.leagueoflegends.com/en-us/" target="_blank">League of Legends</a></li>
                      <li>- <a className="underline" href="https://www.dota2.com/home" target="_blank">Dota 2</a></li>
                    </ul>
                    <li>- FPS</li>
                    <ul className="pl-4">
                      <li>- <a className="underline" href="https://playvalorant.com/" target="_blank">VALORANT</a></li>
                      <li>- <a className="underline" href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/" target="_blank">CS:GO</a></li>
                    </ul>
                  </ul>
                </div>
                <div className="my-4">
                  <h3 className="underline font-bold">Classmate References</h3>
                  <p>These are some of the classmates who share common interests.</p>
                  <ul>
                    <li>- <a className="underline" href="https://sites.google.com/view/keeganc/home" target="_blank">Keegan</a></li>
                    <li>- <a className="underline" href="https://sean445.hostman.site/#" target="_blank">Sean</a></li>
                    <li>- <a className="underline" href="https://people.tamu.edu/~pavanpoladi/CSCE445.html" target="_blank">Pavan</a></li>
                    <li>- <a className="underline" href="http://people.tamu.edu/~samjefferis/" target="_blank">Sam</a></li>
                    <li>- <a className="underline" href="https://nkemdianyiam.github.io/CSCE-656_Webpage/" target="_blank">Nkemdi</a></li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-1/3 justify-center items-center lg:pl-8">
                <img
                  className="rounded-lg border-4 w-full md:w-1/2 lg:w-full md:mb-4 lg:mb-0 border-solid border-pastelBlue-500 shadow shadow-lg"
                  src={require(`../../assets/images/about_page/hobbies.JPG`)}
                />
              </div>
            </div>
          </PopInLeft>
        </div>
      </div>
      <div className="h-16"></div>
    </div>
  );
}

function Assignment2Page() {
  return (
    <MenuWrapper color="pastelBlue" openPage="" page={<Assignment2Content />} />
  );
}

export default Assignment2Page;