import frame from "@/assets/frame.png";
import { IoLockClosedOutline } from "react-icons/io5";
export function PayOption() {
	return (
		<div className="p-2 items-center flex flex-col xl:flex-row xl:justify-around border-solid  border-[1px] my-5 rounded-md text-xs">
			<div className="flex items-center gap-5">
				<div>
					<h1 className="">Free Shipping</h1>
				</div>
				<span className="h-6 w-[1px] bg-slate-200"></span>
				<div className="flex">
					<IoLockClosedOutline className="h-3.5 mr-2"/>
					<h1 className="">Secure 256-bit SSL encryption</h1>
				</div>
			</div>
			<span className="h-[1px] w-[95%] bg-slate-200 my-2 md:hidden"></span>
			<div>
				<img  src={frame}/>
			</div>
		</div>
	);
}
