export function Button({ text } :{ text: string }) {
	return (<button className="w-full   h-14 border rounded-full text-white bg-[#59AE43]  flex items-center justify-center gap-10">
		{text}
	</button>);
}

