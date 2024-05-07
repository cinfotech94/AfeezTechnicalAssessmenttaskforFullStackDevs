// components/Home.js

import React from 'react';
import twitter from '../assets/svg/1.svg';
import facebook from '../assets/svg/2.svg';
import github from '../assets/svg/4.svg';
import instagram from '../assets/svg/3.svg';
const style = {
    height: '8vh'
};const style2 = {
    height: '15vh'
};
function FooterComponent()
{
    return <div className="bg-black">
      <div style={style2} className="bg-black flex">
        <div className="w-full flex flex-row items-center">
            <a href="/" className="w-1/5 pl-1 flex flex-row items-center"> 
                
            </a>
            <div className="pr-16 w-3/5 flex flex-row">
                <a href="/" className="text-white p-2 text-xs lg:text-lg xl:text-lg md:text-sm sm:text-lg hover:text-customMainColor mr-64">Home</a>
                <a href="/Search" className="text-white p-2 text-xs lg:text-lg xl:text-lg md:text-sm sm:text-lg hover:text-customMainColor">Search Music</a>
            </div>
            <div className="pr-3 w-1/5 flex flex-row"> 
                <span className="pr-3 w-full flex">
                    <img className="pr-1" src={twitter} alt="twitter" />
                    <img className="pr-1" src={facebook} alt="facebook" />
                    <img className="pr-1" src={instagram} alt="facebook" />
                        <img className="pr-1 hidden md:block lg:block xl:block" src={github} alt="facebook" />
                </span>
            </div>
        </div>
        </div>
        <div className="flex items-center w-full pb-4">
            <div className="text-white text-xs m-auto">Copyright 2024, All Rights Reserved by CINFOTECH</div>
        </div>
    </div>  
        ;
}

export default FooterComponent;
