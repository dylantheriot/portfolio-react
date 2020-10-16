import React from 'react';
import TempImg from '../../assets/images/about_page/hacker.jpg';
import QualificationsListDivider from './QualificationsListDivider';

function QualificationsListItem(props) {

    function handleClick(link) {
      window.open(link);
    }

  return (
  <>
   <div className="flex flex-col lg:flex-row">
    <div className="flex flex-col lg:w-1/3 justify-center relative">
    <div className="lg:absolute lg:top-0 flex flex-row text-lg uppercase font-bold text-pastelRed-700 items-center w-full">
      <h2>
        <span className="text-pastelRed-500">#</span> {props.date}
      </h2>
    </div>
    <div className='pt2 md:pt-8'>
      <img className="h-24 md:h-64 border-4 border-solid border-pastelRed-500 shadow shadow-lg rounded rounded-lg" src={require(`../../assets/images/qualifications_page/${props.imgUrl}`)}></img>
    </div>
    </div>
    <div className="flex flex-col w-full lg:pl-12 pl-0 lg:w-2/3">
    <h2 className="text-3xl text-left md:text-5xl font-bold">
      {props.title}<span className="text-pastelRed-500">;</span>
    </h2>
    <p className="text-lg md:text-xl"><strong>{props.job}</strong></p>
    <p className="text-lg md:text-xl">
      {props.description}
    </p>
    <div className="flex flex-row mt-2 w-full items-center">
    {
      props.hasLink1 && <button onClick={() => {handleClick(props.link1)}} className="mr-4 px-4 py-2 bg-pastelRed-800 text-white rounded-lg focus:outline-none hover:bg-pastelRed-300">
      {props.link1Title}
    </button>
    }
    </div>
  </div>
    </div>
  {props.hasDivider && <div className="flex flex-row items-center justify-content"><QualificationsListDivider /></div>}
  </>
  );
}

export default QualificationsListItem;