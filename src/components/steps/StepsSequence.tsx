// StepSequence.tsx

import React from 'react';
import { MdCheck } from 'react-icons/md';

interface StepSequenceProps {
	currentStep: number;
	titles: string[];
}

const StepSequence: React.FC<StepSequenceProps> = ({ currentStep, titles }) => {
	const steps = [1, 2, 3, 4];

	return (
		<div className="flex justify-between my-6 mx-8">
			{steps.map((step, index) => (
				<div key={step} className="flex flex-col items-center mt-2">
					{index > 0 && (
						<div className={`border-t border-gray-500 ${index < currentStep ? 'border-green-500' : ''}`}></div>
					)}
					<div
						className={`flex items-center justify-center w-5 h-5 md:w-10 md:h-10 rounded-full border
						${index < currentStep
								? 'text-white border-green-500 bg-green-500'
								: index < currentStep - 1 ?
									'border-blue-500 text-blue-500' :
									'border-blue-500'
						} 
				${index === currentStep && 'bg-blue-500 text-white'}
				`}
					>

						{index < currentStep ? <MdCheck size={18} /> : step}
					</div>

					<div className={`text-center text-xs mt-2 ${currentStep === index && 'font-bold'}`}>{titles[index]}</div>
				</div>
			))}
		</div>
	);
};

export default StepSequence;

