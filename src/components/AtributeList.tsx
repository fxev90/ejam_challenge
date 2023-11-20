import { MdCheck } from "react-icons/md";

export function AtributeList() {
	return (<ol className="list-decimal text-xs mt-4">
		<li className="flex items-center mb-2">
			<MdCheck className="text-[#2C7EF8] mr-2 h-6 w-6 " />Negative Ion Technology may {'\u00A0'}<strong className="text-[#4D5254]"> help with allergens</strong>
		</li>
		<li className="flex items-center mb-2">
			<MdCheck className="text-[#2C7EF8] mr-2 h-6 w-6 " /> Designed for {'\u00A0'}<strong className="text-[#4D5254]">air rejuvenation</strong>
		</li>
		<li className="flex items-center mb-2">
			<MdCheck className="text-[#2C7EF8] mr-2 h-6 w-6 " /> <strong className="text-[#4D5254]">Perfect for every room</strong>{'\u00A0'} in all types of places.
		</li>
	</ol>);
}
