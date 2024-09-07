"use client";
import { cn } from "@/lib/utils/cn";
import React, { useState } from "react";
import TextController from "../ui/text-controller";
import { useFormik } from "formik";
import * as yup from "yup";
import ShinnyButton from "../ui/shinny-button";
const schema = yup.object({
	name: yup
		.string()
		.required("Name is required")
		.min(3, "Name must be at least 3 characters"),
	email: yup
		.string()
		.email("Invalid email  format")
		.required("Email is required"),
	message: yup
		.string()
		.required("Message is required")
		.min(10, "Message must be at least 10 characters"),
});

const ContactSection = () => {
	const [open, setOpen] = useState(false);
	const form = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validationSchema: schema,
		onSubmit: (values, { resetForm, setSubmitting }) => {
			console.log(values);
			resetForm();
			setOpen(false);
		},
	});
	return (
		<>
			<button
				onClick={() => setOpen(true)}
				type="button"
				className={cn(
					"fixed md:right-10 md:bottom-20 right-6 bottom-10 z-[999] bg-transparent rounded-full",
					{
						hidden: open,
					}
				)}
			>
				<div className="relative">
					<video
						src="https://resend.com/static/landing-page/3d-integrate-afternoon.mp4"
						className="h-[100px] w-[100px] rounded-2xl"
						loop
						autoPlay
						muted
					/>
					<div className="h-full w-full absolute top-0 left-0"></div>
				</div>
			</button>
			<div
				className={cn(
					"fixed h-screen w-full md:w-[50vw] max-w-[550px] bg-[#0E0E0E] right-0 top-0 z-[99999999] py-10 md:px-10 px-6 transition-all duration-500 ease-linear",
					{
						"translate-x-[600px]": !open,
					}
				)}
			>
				<span
					onClick={() => {
						form.resetForm();
						setOpen(false);
					}}
					className="float-right text-white/50 -mt-2 cursor-pointer hover:text-white transition-all duration-200 ease-linear "
				>
					Close
				</span>
				<span className="text-white text-2xl font-semibold mb-8 block">
					Contact Form
				</span>

				<form
					onSubmit={form.handleSubmit}
					className="flex flex-col md:gap-6 gap-4"
				>
					<TextController
						label="Name*"
						name="name"
						value={form.values.name}
						onChange={form.handleChange}
						error={Boolean(form.touched.name && form.errors.name)}
					/>
					<TextController
						label="Email*"
						name="email"
						value={form.values.email}
						onChange={form.handleChange}
						error={Boolean(form.touched.email && form.errors.email)}
					/>
					<TextController
						label="Message*"
						name="message"
						value={form.values.message}
						onChange={form.handleChange}
						error={Boolean(form.touched.message && form.errors.message)}
					/>
					<div className="flex justify-end w-full">
						<ShinnyButton type="submit">Send</ShinnyButton>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactSection;
