import { Button } from "../components/Button";

export const Subscribe = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  

	return (
		<section
			id="contact-us"
			className="max-container flex justify-between items-center max-lg:flex-col gap-10"
		>
			<h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
				Sign Up for
				<span className="text-coral-red"> Updates </span>& Newsletter
			</h3>
			<form
				className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
				onSubmit={handleSubmit}
			>
				<input
					type="email"
					placeholder="subscribe@nike.com"
					className="input"
					required
				/>
				<div className="flex max-sm:justify-end items-center max-sm:w-full">
					<Button label="Sign Up" fullWidth type="submit" />
				</div>
			</form>
		</section>
	);
};
