import { cn } from '@/lib/utils/cn'
import React, { HTMLAttributes } from 'react'

const Container = ({children, className, ...props}:HTMLAttributes<HTMLDivElement>) => {
	return (
		<div {...props} className={cn("max-w-[1576px] mx-auto px-6")} >{children}</div>
	)
}

export default Container