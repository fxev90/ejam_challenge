
import { FaPercent } from "react-icons/fa";

export function OfferCard() {
	return (<div className="h-16 my-8 bg-[#EDF3FD] rounded-md flex px-4 items-center">
		<div className="rounded-full bg-[#2C7EF8] p-2">
			<FaPercent className="text-white h-3 w-3  border-none" />
		</div>

		<h1 className="leading-[16.8px] text-center text-sm font-normal ml-4">Save <span className="text-[#2C7EF8]">53%</span> and get <span className="text-[#2C7EF8]">6 extra Clarifision</span> for only <span className="text-[#2C7EF8]">$14 Each</span>.</h1>
	</div>);
}
