// components/Home.js

import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import girl2 from '../assets/svg/girl 2.svg';
import phoneScanCode from '../assets/svg/phone scan code.svg';
import FooterComponent from '../components/FooterComponent';
const picsHeight = {
	height: '28vh'
};
const AboutUs = () => {
	return (
		<>
			<HeaderComponent />
			<div className="bg-gray-50">
				<div className="relative bg-customMainColor xl:mb-28 lg:mb-28 md:mb-22 mb-12">
					<div className="">
						<img src={girl2} className="w-1/3 " alt="Background Image" />
					</div>
					<div className="text-center lg:text-5xl xl:text-5xl md:text-3xl text-3xl w-full font-bold text-white absolute xl:top-10 lg:top-10 md:top-5 top-2 left-0 right-0 bottom-0">About Us</div>
				</div>
				<div className="block xl:flex lg:flex md:flex lg:mb-32 xl:mb-32 md:mb-16 mb-8 bg-gray-50">
					<div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full xl:pl-24 lg:pl-24  md:pl-24  p-8 pr-8 ">
						<div className="text-5xl md:text-4xl font-semibold mb-8 text-center xl:text-right lg:text-right md:text-right">Healthsquare Pay</div>
						<div className="block justify-evenly text-xl md:text-lg text-gray-700 text-center xl:text-right lg:text-right md:text-right">
							<span>At Healthsquare Pay, </span><span className="font-bold">we're revolutionizing the way healthcare is accessed and paid for across Africa.</span> <span>Our innovative web application rewards healthcare consumers with points for their spending on healthcare services. These points can then be redeemed for free healthcare services, making quality healthcare more accessible and affordable for everyone.</span></div>
					</div>
					<div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full xl:pl-24 lg:pl-24  md:pl-24  p-8 pr-8 ">
						<div className="text-5xl md:text-4xl font-semibold mb-8 text-center xl:text-right lg:text-right md:text-right">Our Vision</div>
						<div className="block justify-evenly text-xl md:text-lg text-gray-700 text-center xl:text-right lg:text-right md:text-right">
							<span className="font-bold">Our vision is bold yet simple: </span>to become the preferred payment system for health services across different health facilities in Africa. We believe that by providing an easy-to-use platform that rewards users for their healthcare spending, we can incentivize individuals to prioritize their health and well-being while also alleviating financial burdens associated with medical expenses.</div>
					</div>
				</div>
				<div className="block xl:flex lg:flex md:flex bg-white pt-4 xl:pt-16 lg:pt-16 md:pt-16 xl:mb-64 lg:mb-64 md:mb-16 mb-8">
					<div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full lg:pl-24 xl:pl-24 md:pl-24 p-8 xl:pr-auto lg:pr-auto md:pr-auto">
						<img className="xl:w-5/6 lg:w-5/6 md:w-full w-full"src={phoneScanCode }/>
					</div>
					<div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full xl:pr-24 lg:pr-24 md:pr-24 p-8 xl:pl-8 lg:pl-8 md:pl-8">
						<p className="xl:text-3xl lg:text-3xl md:text-md text-sm text-gray-700 font-bold mb-8 sm:mb-2 xl:text-right lg:text-right md:text-right text-center">At Healthsquare Pay, we are committed to fostering a healthier Africa by empowering individuals to take control of their healthcare journey. Whether you're seeking routine check-ups, specialized treatments, or emergency care, Healthsquare Pay is here to support you every step of the way.</p>
						<p className="xl:text-xl lg:text-xl md:text-sm text-xs mb-10 sm:mb-3 text-center xl:text-right lg:text-right md:text-right">Join us as we pave the way towards a healthier, happier Africa. Together, let's make quality healthcare accessible to all.</p>
						<div className=" text-center w-auto text-lg mb-8 bg-customMainColor py-3 px-6 hover:bg-white hover:border hover:border-customMainColor hover:text-text-customMainColor rounded-lg">Get Stared</div>
					</div>
				</div>

			</div>
			<FooterComponent/>;

		</>
	);
};


export default AboutUs;
