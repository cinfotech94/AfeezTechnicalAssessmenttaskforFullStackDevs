// components/Home.js
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import HomeIllustration1 from '../assets/svg/Illustration.svg';
import Redeem from '../assets/svg/chart-bar-33 1.svg';
import content from '../assets/svg/archive-content 1.svg';
import board from '../assets/svg/board-2 1.svg';
import girl from '../assets/svg/girl 1.svg';
import checkCircle from '../assets/svg/check-circle.svg';
import partnership from '../assets/svg/partnership.svg';
import React, { useState, useEffect } from 'react';
const monochrome = {
	filter: 'grayscale(200%)'
};const picsHeight = {
	height: '28vh'
};

const Homepage = () => {
	const [imageHeight, setImageHeight] = useState('auto');

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setImageHeight('200px'); // Set the height to 200px when screen width is less than 640px
			} else if (window.innerWidth > 640){
				setImageHeight('auto'); // Set the height to auto when screen width is 640px or more
			}
		};

		// Initial call to set image height on component mount
		handleResize();

		// Event listener for window resize
		window.addEventListener('resize', handleResize);

		// Cleanup function to remove event listener on component unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<HeaderComponent />
			<div className="w-full flex pt-32 pb-32">
					<div className="flex w-1/2 flex-row lg:flex md:flex xl:flex hidden">
						<div className="pl-16 pt-16">
						<div className="lg:text-6xl xl:text-6xl md:text-4xl font-bold mb-8">Earn rewards for taking care of your health!</div>
							<div className="xl:text-md lg:text-md md:text-sm mb-8">Introducing Healthsquare Pay, the platform that rewards you for every naira you spend on healthcare.</div>
							<span className="lg:text-lg xl:text-lg md:text-md mb-8 bg-customMainColor py-3 px-6 hover:bg-white hover:border hover:border-customMainColor hover:text-text-customMainColor rounded-lg">Sign-up Now!</span>
						</div>
					</div>
					<div className="flex w-1/2 flex-row lg:flex md:flex xl:flex hidden">
					<div className="w-auto flex-row z-30 xl:mt-auto lg:mt-16 md:mt-10">
							<div className="xl:text-lg lg:text-md md:text-sm py-2 px-4 opacity-80 border z-30 w-auto border-customMainColor bg-gray-100 rounded-full font-bold xl::mb-16 md:mb-8 lg:mb-16">Make Payment</div>
							<div className="xl:text-lg lg:text-md md:text-sm py-2 px-4 opacity-80 border z-30 w-auto border-customMainColor bg-gray-100 rounded-full font-bold xl::mb-16 md:mb-8 lg:mb-16">Scan Details</div>
							<div className="xl:text-lg lg:text-md md:text-sm py-2 px-4 opacity-80 border z-30 w-auto border-customMainColor bg-gray-100 rounded-full font-bold xl::mb-16 md:mb-8 lg:mb-16">EARN POINTS</div>
							<div className="xl:text-lg lg:text-md md:text-sm py-2 px-4 opacity-80 border z-30 w-auto border-customMainColor bg-gray-100 rounded-full font-bold xl::mb-16 md:mb-8 lg:mb-16">Get Rewarded</div>
						</div>
						<div className="flex w-4/5 z-10 flex-row pr-8 ml-[-60px]">
							<img className="w-full "src={HomeIllustration1} />
						</div>
					</div>
				<div className="block lg:hidden xl:hidden md:hidden">
					<div className="relative flex w-full flex-row ">
						<div className="flex w-full z-10 flex-row p-2">
							<img className="w-full " src={HomeIllustration1} />
						</div>
						<div className="absolute bottom-5 w-full">
							<div className="w-full flex z-30 px-8 mb-4">
								<div className="py-2 px-4 opacity-80 text-center border z-30 w-2/5 mx-auto border-customMainColor bg-gray-100 rounded-full font-bold md:mb-8 xl:mb-16 lg:mb-16">Make Payment</div>
								<div className="py-2 px-4 opacity-80 text-center border z-30 w-2/5 mx-auto border-customMainColor bg-gray-100 rounded-full font-bold md:mb-8 xl:mb-16 lg:mb-16">Scan Details</div>
							</div>
							<div className="w-full flex z-30 px-8 ">
								<div className="py-2 px-4 opacity-80 text-center border z-30 w-2/5 mx-auto border-customMainColor bg-gray-100 rounded-full font-bold md:mb-8 xl:mb-16 lg:mb-16">EARN POINTS</div>
								<div className="py-2 px-4 opacity-80 text-center border z-30 w-2/5 mx-auto border-customMainColor bg-gray-100 rounded-full font-bold md:mb-8 xl:mb-16 lg:mb-16">Get Rewarded</div>
							</div>
						</div>
					</div>
					<div className="flex w-full flex-rowr">
						<div className="pl-16 pt-16 w-full flex-row items-cente">
							<div className="w-full text-4xl font-bold mb-8 text-center">Earn rewards for taking care of your health!</div>
							<div className="w-full text-md mb-8 text-center">Introducing Healthsquare Pay, the platform that rewards you for every naira you spend on healthcare.</div>
							<a href="/welcomeback"><span className="w-auto text-lg mb-8 bg-customMainColor py-3 px-6 hover:bg-white hover:border hover:border-customMainColor hover:text-text-customMainColor rounded-lg">Sign-up Now!</span></a>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center ">
				<span className="lg:text-3xl xl:text-3xl md:text-xl font-semibold">
					Using Healthsquare pay comes with some benefits
				</span>
				<span className="xl:text-lg lg:text-lg md:text-md sm:text-sm mt-4">
					Why Choose HealthSquare Pay
				</span>
			</div>
			<div className="flex flex-col items-center justify-center">
				<div className="lg:flex md:flex xl:flex hidden flex-row items-center justify-center my-3">
					<div className="flex flex-col w-1/3 px-16 mt-16 border-r border-grey-500 my-4 items-center justify-center">
						<img src={content} className="mb-6"/>
						<div className="mb-6 font-semibold">Earn Points</div>
						<div className="text-center">You earn a point for every naira you spend in purchasing healthcare service</div>
					</div>
					<div className="flex flex-col w-1/3 px-16 mt-16 border-r border-grey-500 items-center justify-center">
						<img src={Redeem} className="mb-6" />
						<spann className="mb-6 font-semibold">Redeem Rewards</spann>
						<span className="text-center">Redeem your points for discounts on future healthcare services, health and wellness products, or even cash back.</span>
					</div>
					<div className="flex flex-col w-1/3 px-16 mt-16 items-center justify-center">
						<img src={board} className="mb-6" />
						<span className="mb-6 font-semibold">Track your health</span>
						<span className="text-center">Keep track of your healthcare spending and appointments in one convenient place.</span>
					</div>
				</div>
				<div className="lg:hidden xl:hidden md:hidden block">
					<div className="flex flex-col md:w-1/3 px-16 mt-16 items-center justify-center">
						<img src={content} className="mb-6" />
						<div className="mb-6 font-semibold">Earn Points</div>
						<div className="text-center">You earn a point for every naira you spend in purchasing healthcare service</div>
					</div>
					<div className="flex flex-col md:w-1/3 px-16 mt-16 border-r border-grey-500 items-center justify-center">
						<img src={Redeem} className="mb-6" />
						<spann className="mb-6 font-semibold">Redeem Rewards</spann>
						<span className="text-center">Redeem your points for discounts on future healthcare services, health and wellness products, or even cash back.</span>
					</div>
					<div className="flex flex-col md:w-1/3 px-16 mt-16 items-center justify-center">
						<img src={board} className="mb-6" />
						<span className="mb-6 font-semibold">Track your health</span>
						<span className="text-center">Keep track of your healthcare spending and appointments in one convenient place.</span>
					</div>
				</div>
			</div>
			<div className="relative bg-customMainColor xl:my-28 lg:my-28 md:my-22 my-12">
				<div className="">
					<img style={{ height: imageHeight }} src={girl} className="w-1/3 " alt="Background Image" />
				</div>
				<div className="text-center lg:text-4xl xl:text-4xl md:text-2xl text-2xl w-full font-bold text-white absolute xl:top-10 lg:top-10 md:top-5 top-2 left-0 right-0 bottom-0">How it Works</div>
				<div className="absolute xl:top-20 lg:top-20 md:top-10 top-4 left-0 right-0 bottom-0 xl:mx-30 lg:mx-32 md:mx-12 mx:12 mt-2 xl:text-md lg:text-md md:text-sm text-xs">
					<div className="flex flex-row">
						<div className="flex w-1/2 items-center xl:p-8 lg:p-8 md:p-1 p-1 rounded-xl bg-white my-4 xl:mr-8 lg:mr-8 md:mr-3 mr-2">
							<div className="w-1/6">
								<img src={checkCircle} className="w-1/2" alt="Check Circle" />
							</div>
							<span className="w-11/12">
								<span className="font-bold">Sign Up: </span>
								<span className="">Create a free Healthsquare Pay account using phone number or email address.</span>
							</span>
						</div>
						<div className="flex w-1/2 items-center xl:p-8 lg:p-8 md:p-1 p-1 rounded-xl bg-white my-4">
							<div className="w-1/6">
								<img src={checkCircle} className="w-1/2" alt="Check Circle" />
							</div>
							<span className="w-11/12">
								<span className="font-bold">Make Payment: </span>
								<span>Add your spending details on healthcare. The amount and facility used.</span>
							</span>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="flex w-1/2 items-center xl:p-8 lg:p-8 md:p-1 p-1 rounded-xl bg-white my-4 xl:mr-8 lg:mr-8 md:mr-3 mr-2">
							<div className="w-1/6">
								<img src={checkCircle} className="w-1/2" alt="Check Circle" />
							</div>
							<span className="w-11/12">
								<span className="font-bold">Earn Point:</span>
								<span>Watch your points automatically accumulate with every transaction.</span>
							</span>
						</div>
						<div className="flex w-1/2 items-center xl:p-8 lg:p-8 md:p-1 p-1 rounded-xl bg-white my-4">
							<div className="w-1/6">
								<img src={checkCircle} className="w-1/2" alt="Check Circle" />
							</div>
							<span className="w-11/12">
								<span className="font-bold">Redeem Rewards: </span>
								<span>Choose from a variety of rewards and redeem your points easily.</span>
							</span>
						</div>

					</div>
				</div>
			</div>
			<div className="bg-white ">
				<div className="w-full bg-gray-50 lg:text-3xl xl:text-3xl md:text-2xl text-xl text-gray-900 font-bold text-center lg:py-8 xl:py-8 md:py-5 py-5">partners</div>
				<div className="filter-grayscale lg:p-16 xl:p-16 md:p-10 p-6">
					<img className="xl:mb-32 lg:mb-32 md:mb-16 sm:mb-8 w-full " style={monochrome} src={partnership} />
				</div>
				<div className="bg-gray-50  px-16 py-32">
					<div className="w-full rounded-xl bg-customMainColor p-16">
						<div className="text-white lg:text-5xl xl:text-5xl md:text-3xl text-xl font-bold text-center">
							Be the first to know about our updates and promotions
						</div>
						<div className="text-white xl:text-md lg:text-md md:text-sm text-xs xl:mx-64 lg:mx-32 md:mx-32 mx-3 w-auto xl:flex lg:flex md:block sm:block pt-10">
							<input className="mr-8 placeholder-white mr-8 xl:w-1/3 lg:w-1/3 md:w-full md:flex-col w-full  mb-4 bg-customMainColor border border-white text-white p-3  font-bold rounded-lg"type="text" placeholder="First name" />
							<input className="mr-8 placeholder-white mr-8 xl:w-1/3 lg:w-1/3 md:w-full md:flex-col w-full  mb-4 bg-customMainColor border border-white text-white p-3  font-bold rounded-lg"type="text" placeholder="Email address" />
							<button className="mr-8 xl:w-1/3 lg:w-1/3 md:w-full w-full mb-4 bg-white border border-white text-customMainColor p-3 font-bold rounded-lg">Subscribe Now</button>
						</div>
					</div>
				</div>
			</div>

			<FooterComponent />
		</>
	);
};

export default Homepage;
