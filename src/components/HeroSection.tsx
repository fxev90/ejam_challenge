import { FaStar } from "react-icons/fa";


type HeroSectionpProps = {
	image5: string,
	star: number,
	handleClick: (star: number) => void,
	rating: number
}


export const HeroSection: React.FC<HeroSectionpProps> = function ({ image5, handleClick, rating }) {
	return (<>

		<div className="grid grid-cols-3 gap-3 md:gap-0 py-4 md:hidden">

			<div className="col-span-1 bg-[#2C7EF8] rounded-2xl md:w-[100px] md:h-[100px]">
				<img src={image5} alt="Product" className="w-full h-full object-cover " />
			</div>

			<div className="col-span-1 items-center justify-center">
				<h2 className="text-ms font-semibold absolute mt-5 md:mt-0">Clarifion Air Ionizer</h2>
				<div className="flex mt-14 md:mt-7">
					{[1, 2, 3, 4, 5].map(star => <FaStar key={star} onClick={() => handleClick(star)} className={` h-[12px] w-[12px] cursor-pointer text-xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`} />)}
				</div>
				<div className="flex mt-5">
					<input type="checkbox" className="border rounded-full" />
					<h4 className="text-xs ml-5">12 left in Stock</h4>

				</div>
				<h1 style={{
					lineHeight: '16.8px'
				}} className="text-left text-xs font-normal absolute hidden md:block">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</h1>
			</div>

			<div className="col-span-1 flex items-baseline justify-end mt-4">
				<span className="text-slate-500 text-xs font-bold mr-2 line-through">$180</span>
				<span className="text-lg font-bold text-[#2C7EF8]">$84</span>
			</div>
		</div>
		<div className="py-4 hidden md:flex">

			<div className="  bg-[#2C7EF8] rounded-2xl min-w-[134px] h-[134px] flex justify-center items-center">
				<img src={image5} alt="Product" className="h-[90%]"/>
			</div>

			<div className=" items-center justify-center pl-4">
				<h2 className="text-xs font-semibold md:mt-0">Clarifion Air Ionizer</h2>
				<div className="flex mt-2">
					{[1, 2, 3, 4, 5].map(star => <FaStar key={star} onClick={() => handleClick(star)} className={` h-[12px] w-[12px] cursor-pointer text-xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`} />)}
				</div>
				<div className="flex my-2">
					<input type="checkbox" className="border rounded-full" />
					<h4 className="text-xs ml-5">12 left in Stock</h4>

				</div>
				<h1 style={{
					lineHeight: '16.8px'
				}} className="text-left text-xs font-normal hidden md:block">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</h1>
			</div>

			<div className=" flex items-baseline justify-end mt-4">
				<span className="text-slate-500 text-xs font-bold mr-2 line-through">$180</span>
				<span className="text-lg font-bold text-[#2C7EF8]">$84</span>
			</div>
		</div>
	</>);
}
