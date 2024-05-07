// components/Home.js

import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import COntactCode from '../assets/svg/contac scan code.svg';
import makingCall from '../assets/svg/making Call.svg';
import FooterComponent from '../components/FooterComponent';
import twitter from '../assets/svg/1.svg';
import facebook from '../assets/svg/2.svg';
import github from '../assets/svg/4.svg';
import instagram from '../assets/svg/3.svg';
const ContactUs= () => {
	return (
		<>

			<HeaderComponent />
			<div className="bg-gray-50 pb-20">
				<div className="relative bg-customMainColor xl:mb-28 lg:mb-28 md:mb-22 mb-12">
					<div className="">
						<img src={COntactCode} className="w-full " alt="Background Image" />
					</div>
					<div className="text-center lg:text-5xl xl:text-5xl md:text-3xl text-3xl w-full font-bold text-white absolute xl:top-10 lg:top-10 md:top-5 top-2 left-0 right-0 bottom-0">Contact Us</div>
				</div>

				<div className="block xl:flex lg:flex md:flex pt-4 xl:pt-16 lg:pt-16 md:pt-16 xl:mb-32 lg:mb-32 md:mb-8 mb-5">
					<div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full lg:pl-24 xl:pl-24 md:pl-24 p-8 xl:pr-auto lg:pr-auto md:pr-auto">
						<img className="xl:w-5/6 lg:w-5/6 md:w-full w-full" src={makingCall} />
					</div>
					<div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full flex-row lg:pl-24 xl:pl-24 md:pl-24 p-8 xl:pr-auto lg:pr-auto md:pr-auto">
						<span className="w-full block text-3xl mb-5 font-bold lg:text-leftsxl:text-left md:text-left text-center text-gray-700">Drop us a message</span>
						<span className="w-full block mb-1 font-semibold text-gray-700">What should we call you?</span>
						<input className="mb-3 w-full p-2 border border-gray-400 rounded-lg placeholder-gray-600 bg-white" type="text" placeholder="Enter your name" />
						<span className="w-full block mb-1 font-semibold text-gray-700">How can we reach you?</span>
						<input className="mb-3 w-full p-2 border border-gray-400 rounded-lg placeholder-gray-600 bg-white" placeholder="Enter your email address"  />
						<span className="w-full block mb-1 font-semibold text-gray-700"> What should we call you?</span>
						<textarea className="mb-3 w-full p-2 border border-gray-400 rounded-lg placeholder-gray-600 bg-white" type="text" placeholder="Write your message here..."/>
						<div className=" w-full block" className=" text-center w-auto text-lg mb-8 bg-customMainColor py-3 px-6 hover:bg-white hover:border hover:border-customMainColor hover:text-text-customMainColor rounded-lg">Get Stared</div>

					</div>
				</div>
				<div className="mb-7 pb-8  bg-white">
					<div className="text-center font-bold pt-5 text-gray-700 xl:text-3xl lg:text-3xl md:text-2xl text-xl">You can also reach us on social media</div>
					<span className="pr-3 w-full flex justify-center pt-4">
						<img className="pr-1" src={twitter} alt="twitter" />
						<img className="pr-1" src={facebook} alt="facebook" />
						<img className="pr-1" src={instagram} alt="facebook" />
						<img className="pr-1" src={github} alt="facebook" />
					</span>
				</div>
			</div>

	<FooterComponent/>
		</>
	);
};

export default ContactUs;
