// Header.tsx

import React, { useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { PiTruck, PiSealCheckLight } from "react-icons/pi"
import { FaRegHeart } from "react-icons/fa";
import FluentArrowSyncCheckMark from "@/assets/fluent_arrow_sync_checkmark.svg";
import image3 from "@/assets/image3svg.svg";
import image4 from "@/assets/antivirus.svg";
import image2svg from "@/assets/image2svg.svg";

interface HeaderProps {
	[key: string]: string | JSX.Element
}

interface CarouselItem {
	text: string;
	icon: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	const iconClasses = {
		size: 20,
		color: "white"
	}

	const carouselItems: CarouselItem[] = [
		{ text: '30-DAY SATISFACTION GUARANTEE', icon: <PiSealCheckLight {...iconClasses} /> },
		{ text: 'FREE DELIVERY ON ORDERS OVER $40.00', icon: <PiTruck {...iconClasses} /> },
		{ text: '50.000+ HAPPY CUSTOMERS', icon: <FaRegHeart {...iconClasses} /> },
		{ text: '100% MONEY BACK GUARANTEE', icon: <img src={FluentArrowSyncCheckMark} /> }
	];

	const handlePrevSlide = () => {
		setActiveSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length);
	};

	const handleNextSlide = () => {
		setActiveSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
	};
	return (
		<header className=''>

			<div className="md:hidden bg-[#252F3D] text-white p-4 flex justify-around items-center ">
				<button onClick={handlePrevSlide}>
					<MdArrowBackIosNew size={24} color="white" />
				</button>

				<div className="flex items-center">
					{carouselItems[activeSlide].icon}
					<h1 className='ml-2 font-medium text-xs'>{carouselItems[activeSlide].text}</h1>
				</div>

				<button onClick={handleNextSlide}>
					<MdArrowForwardIos size={24} color="white" />
				</button>
			</div>

			<div className="hidden md:block bg-[#252F3D] text-white p-4 flex justify-around items-center ">


				<div className="flex justify-between items-center p4 max-w-[1245px] m-auto">
					{carouselItems.map((item, index) => (
						<div key={index} className="flex items-center text-white">
							<span className="mr-[5px]">{item.icon}</span>
						<h4 className='text-[0.6rem]'>{item.text}</h4>
						</div>
					))}
				</div>


			</div>

			<div className="bg-white p-6 mt-2 flex justify-between items-center max-w-[1245px] m-auto">
				<div >
					<img className='h-6 md:h-12' src={image2svg} />
				</div>
				<div className='flex gap-4 h-4 md:h-8'>
					<img src={image3} />
					<img src={image4} />
				</div>
			</div>
		</header>
	);
};


