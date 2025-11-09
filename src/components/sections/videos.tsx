"use client";

import {
	EntryPoint,
	EntryPointType,
	EntryPointSize,
} from "@thinkflagship/horizon-web-shorts";

const Videos = () => {
	return (
		<div className="w-full lg:justify-center lg:flex lg:px-0 px-6">
			<EntryPoint
				id="#387136"
				skeletonType={EntryPointType.RECTANGLE}
				skeletonSize={EntryPointSize.BOLD}
			/>
		</div>
	);
};

export default Videos;
