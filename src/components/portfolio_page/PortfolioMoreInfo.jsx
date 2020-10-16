import React from 'react';
import PortfolioListItem from './PortfolioListItem';
import projects from './portfolioprojects.js';
import { FadeInLeft } from 'react-spring-pop';
import { useMediaQuery } from 'react-responsive'


function PortfolioMoreInfo() {

  const isMobile =  useMediaQuery({ query: '(max-width: 767px)' });
  let thresh = isMobile ? 0.2 : 0.4;

  return (
    <div className="flex flex-col text-base">
    {projects.map((proj, index) => <FadeInLeft once={true} threshold={thresh} key={index} ><PortfolioListItem imgUrl={proj.image} hackathon={proj.hackathon} hasDivider={proj.hasDivider} awards={proj.awards} date={proj.date} title={proj.title} description={proj.description} hasLink1={proj.hasLink1} link1={proj.link1} link1Title={proj.link1Title} hasLink2={proj.hasLink2} link2={proj.link2} link2Title={proj.link2Title} /></FadeInLeft>)}
    </div>
  );
}

export default PortfolioMoreInfo;