
"use client";

import { FlagshipContainer } from "@thinkflagship/horizon-web-shorts";
import "@thinkflagship/horizon-web-shorts/styles.css";

export default function FlagshipProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<FlagshipContainer licenseKey="pk_live_03feb251a0021f66cfa2ce26286e183fe3a3ec34c76028d5.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUG9ydGZvbGlvIiwicGxhdGZvcm1UeXBlIjoiV0VCIiwiZG9tYWluIjp7ImRvbWFpbiI6Imh0dHBzOi8vc2hhaG9iaWRkaW4tcGFydGZvbGlvLnZlcmNlbC5hcHAvIiwidmVyaWZpZWQiOmZhbHNlfSwiZXhwaXJlc0F0IjoiMjEyNS0xMC0xNVQxODo1OToyNi42NzVaIiwiY3JlYXRlZEJ5IjoiNjkwZGYwNTc1NmU0NTY0ZDJlMTkwYmU3IiwidGVuYW50SWQiOiI2OTBkZjA1NzU2ZTQ1NjRkMmUxOTBiZTkiLCJfaWQiOiI2OTBmOTMwZWM3NDkzNDAwNTk1MDVlOTgiLCJ0b2tlblR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NjI2MjgzNjYsImV4cCI6NDkxNjIyODM2Nn0.vXvRGn9jpT5V1IQsqN9ucRMAYMCDKKNXtDla6FQ0144">
			{children}
		</FlagshipContainer>
	);
}
