import React from 'react';
import PortfolioListDivider from './PortfolioListDivider';

function PortfolioListItem(props) {

    function handleClick(link) {
      window.open(link);
    }

  return (
  <>
   <div className="flex flex-col lg:flex-row">
    <div className="flex flex-col lg:w-1/3 justify-center relative">
    <div className="lg:absolute lg:top-0 flex flex-row text-lg uppercase font-bold text-pastelGreen-700 items-center w-full">
      <h2>
        {props.date}
      </h2>
      <div className="ml-4 w-16 bg-pastelGreen-700 h-1"></div>
    </div>
    <div className='pt-2 md:pt-8'>
      <img className="h-24 md:h-64 border-4 border-solid border-pastelGreen-500 shadow shadow-lg rounded rounded-lg object-cover" src={require(`../../assets/images/portfolio_page/${props.imgUrl}`)}></img>
    </div>
    </div>
    <div className="flex flex-col w-full lg:pl-12 pl-0 lg:w-2/3">
    <h2 className="text-3xl text-left md:text-5xl font-bold">
      <span className="text-pastelGreen-500">//</span> {props.title}
    </h2>
    <p className="text-lg"><i>{props.hackathon}</i></p>
    <p className="text-lg"><i>{props.awards}</i></p>
    <p className="text-lg md:text-xl">
      {props.description}
    </p>
    <div className="flex flex-row mt-2 w-full items-center">
    {
      props.hasLink1 && <button onClick={() => {handleClick(props.link1)}} className="mr-4 px-4 py-2 bg-pastelGreen-800 text-white rounded-lg focus:outline-none hover:bg-pastelGreen-300">
      {props.link1Title}
    </button>
    } 
    {
    props.hasLink2 && <button onClick={() => {handleClick(props.link2)}} className="px-4 py-2 bg-pastelGreen-800 text-white rounded-lg focus:outline-none hover:bg-pastelGreen-300">
      {props.link2Title}
    </button>
    }
    </div>
  </div>
    </div>
  {props.hasDivider && <div className="flex flex-row items-center justify-content"><PortfolioListDivider /></div>}
  </>
  );
}

export default PortfolioListItem;