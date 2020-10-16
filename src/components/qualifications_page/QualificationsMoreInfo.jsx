import React from 'react';
import QualificationsListItem from './QualificationsListItem';
import qualifications from './qualifications.js';
import { PopIn } from 'react-spring-pop';

function QualificationsMoreInfo() {
  return (
    <div className="flex flex-col text-base">
    {qualifications.map((proj, index) => 
    <PopIn once={true} threshold={0.5} key={index}><QualificationsListItem imgUrl={proj.imgUrl} job={proj.job} hasDivider={proj.hasDivider} date={proj.date} title={proj.title} description={proj.description} hasLink1={proj.hasLink1} link1={proj.link1} link1Title={proj.link1Title} /> </PopIn>)}
    </div>
  );
}

export default QualificationsMoreInfo;