
import image6 from "@/assets/image6svg.svg";

export function GaranteeSection() {
	return (<div className="flex">
		<img className="w-12 h-12 md:w-20 md:h-20 lg:p-2" src={image6} />
		<h1 className="text-xs lg:text-[1rem] lg:line-height-[23px] ml-4 font-normal lg:tracking-wider lg:p-2">If you are not completely thrilled with your Clarifion -
			We have a <b>30 day satisfaction guarantee.</b> Please refer to our return policy at the
			bottom of the page for more details. Happy Shopping!</h1>
	</div>);
}
