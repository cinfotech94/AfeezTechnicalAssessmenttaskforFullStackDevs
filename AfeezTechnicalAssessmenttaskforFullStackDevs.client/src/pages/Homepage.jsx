// components/Home.js
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import girl from '../assets/svg/girl 1.svg';
import checkCircle from '../assets/svg/check-circle.svg';
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
			<div className="bg-white ">

				<div className="bg-gray-50  px-16 py-16">
					<div className="w-full rounded-xl bg-customMainColor p-16">
						<div className="text-white lg:text-5xl xl:text-5xl md:text-3xl text-xl font-bold text-center">
						Afeez Oladunjoye task for Jean Edwards Consulting<br></br>(A full stack Developer)
						</div>
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
								<span className="font-bold">Search: </span>
								<span className="">Search movie, series and music you want with our end point.</span>
							</span>
						</div>
						<div className="flex w-1/2 items-center xl:p-8 lg:p-8 md:p-1 p-1 rounded-xl bg-white my-4">
							<div className="w-1/6">
								<img src={checkCircle} className="w-1/2" alt="Check Circle" />
							</div>
							<span className="w-11/12">
								<span className="font-bold">CLick what you want: </span>
								<span>Click the one you want form a list.</span>
							</span>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="flex w-1/2 items-center xl:p-8 lg:p-8 md:p-1 p-1 rounded-xl bg-white my-4 xl:mr-8 lg:mr-8 md:mr-3 mr-2">
							<div className="w-1/6">
								<img src={checkCircle} className="w-1/2" alt="Check Circle" />
							</div>
							<span className="w-11/12">
								<span className="font-bold">Get from your History:</span>
								<span>Get your answer from cache if you have searching it before, Make it faster.</span>
							</span>
						</div>
						<div className="flex w-1/2 items-center xl:p-8 lg:p-8 md:p-1 p-1 rounded-xl bg-white my-4">
							<div className="w-1/6">
								<img src={checkCircle} className="w-1/2" alt="Check Circle" />
							</div>
							<span className="w-11/12">
								<span className="font-bold">CLick what you want: </span>
								<span>Click the one you want form a list.</span>
							</span>
						</div>
					</div>
					</div>
				</div>
			

			<FooterComponent />
		</>
	);
};

export default Homepage;
