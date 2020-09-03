import React from 'react';

function QuickLink(props) {
  return (
    <>
      <a href={props.link} target="_blank" className="bg-pastelBlue-200 hover:bg-pastelBlue-300 font-bold py-2 px-4 rounded inline-flex items-center md:w-48 lg:w-52 xl:w-64 flex flex-row justify-start">
        {props.svg}
        <span className="ml-2 text-lg md:text-2xl">{props.title}</span>
      </a>
    </>
  );

}

export default QuickLink;