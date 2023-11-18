// Header.tsx

import React, { useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { PiTruck, PiSealCheckLight } from "react-icons/pi"
import { FaRegHeart } from "react-icons/fa";
import FluentArrowSyncCheckMark from "@/assets/fluent_arrow_sync_checkmark.svg";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";

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
		<header>

			<div className="bg-[#252F3D] text-white p-4 flex justify-around items-center">

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
			<div className="bg-white p-6 mt-2 flex justify-between items-center">
				{/* Icon on the left */}
				<div>
					<img src={image2} />
				</div>

				{/* Content in the middle (you can add other content here) */}

				{/* Icons on the right */}
				<div >
					<img src={image1} />
				</div>
			</div>
		</header>
	);
};


