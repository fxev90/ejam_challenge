import girl from "@/assets/girl.png";
import { FaStar } from "react-icons/fa";
import { HiMiniCheckBadge } from "react-icons/hi2";

export function ReviewSection() {
	return (<>

		<div className="reviewCard bg-white rounded-md mt-10 p-4">
			<div className="flex ">
				<img src={girl} alt="" />
				<div className="ml-4">

					<div className="flex mt-2">
						{[1, 2, 3, 4, 5].map(star => <FaStar key={star} className="h-[12px] w-[12px] cursor-pointer text-xl text-yellow-500" />)}
					</div>
					<div className="flex items-center ">
						<strong className="text-[14px]">
							Ken T.
						</strong>
						<HiMiniCheckBadge className="w-4 h-4 text-[#5BB59A] ml-2" /> <h4 className="text-[#5BB59A] ml-2 text-[12px]">Verified Customer</h4>
					</div>

				</div>

			</div>
			<h1 className="mt-4 text-[#4D5254]">
				“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
			</h1>
		</div>
	</>);
}
