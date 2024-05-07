// components/Home.js
import HeaderComponent from '../components/HeaderComponent';
import COntactCode from '../assets/svg/contac scan code.svg';
import makingCall from '../assets/svg/making Call.svg';
import FooterComponent from '../components/FooterComponent';
import twitter from '../assets/svg/1.svg';
import facebook from '../assets/svg/2.svg';
import github from '../assets/svg/4.svg';
import instagram from '../assets/svg/3.svg';
import React from 'react';

const FAQ = () => {
	return (
		<>
			<HeaderComponent />
			<div className="bg-gray-50 pb-32">
				<div className="relative bg-customMainColor ">
					<div className="mb-16">
						<img src={COntactCode} className="w-full " alt="Background Image" />
					</div>
					<div className="text-center lg:text-5xl xl:text-5xl md:text-3xl text-3xl w-full font-bold text-white absolute xl:top-10 lg:top-10 md:top-5 top-2 left-0 right-0 bottom-0">Frequently Asked Quetions</div>
				</div>


				<div className="text-gray-700 lg:px-72 xl:px-72 md:px-36 px-16 xl:text-lg lg:text-lg md:text-md text-sm">
					<div className="font-bold pb-2">1. What is Healthsquare Pay?</div>
					<div>Healthsquare Pay is a web application that rewards healthcare consumers with points for their spending on healthcare services.These points can then be used to obtain free healthcare services.</div>
					<div className="font-bold pb-2">2. How does Healthsquare Pay work?</div>
					<div>Users earn points by spending on healthcare services at participating facilities. These points are accumulated in their Healthsquare Pay account and can be redeemed for free healthcare services offered by our partner facilities.</div>
					<div className="font-bold pb-2">3. What kind of healthcare services can I use my points for?</div>
					<div>Points earned through Healthsquare Pay can be redeemed for a variety of healthcare services, including consultations, diagnostic tests, medications, and treatments at participating healthcare facilities.</div>
					<div className="font-bold pb-2">4. Is Healthsquare Pay available in all African countries?</div>
					<div>Currently, Healthsquare Pay is available in select African countries. We are continually expanding our network of partner facilities to make our services accessible to more people across the continent.</div>
					<div className="font-bold pb-2">5. How do I sign up for Healthsquare Pay?</div>
					<div>Signing up for Healthsquare Pay is easy! Simply visit our website and follow the registration process. Once registered, you can start earning points on your healthcare spending.</div>
					<div className="font-bold pb-2">6. Are there any fees associated with using Healthsquare Pay?</div>
					<div>There are no registration fees or monthly subscription fees for using Healthsquare Pay. However, please note that certain terms and conditions may apply when redeeming points for healthcare services.</div>
					<div className="font-bold pb-2">7. How secure is my personal and financial information on Healthsquare Pay?</div>
					<div>At Healthsquare Pay, we take the security and privacy of our users' information very seriously. We use industry-standard encryption and security measures to protect your personal and financial data.</div>
					<div className="font-bold pb-2">8. Can i transfer my points to someone else?</div>
					<div>Points earned through Healthsquare Pay are non-transferable and can only be used by the account holder for their own healthcare services.</div>
					<div className="font-bold pb-2"> 9. How do I track my points balance and transaction history?</div>
					<div>Users can easily track their points balance and transaction history by logging into their Healthsquare Pay account on our website or mobile app.</div>
					<div className="font-bold pb-2"> 10. How can healthcare facilities become partners with Healthsquare Pay?</div>
					<div>Healthcare facilities interested in becoming partners with Healthsquare Pay can contact us through our website to learn more about our partnership opportunities and benefits.</div>
				</div>
			</div>
			<FooterComponent />

		</>
	);
};

export default FAQ;
