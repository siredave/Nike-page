
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

export const Nav = () => {
	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/" className="glass-effect p-4 rounded-md">
					<img src={headerLogo} alt="logo" width={130} height={29} />
				</a>
				<ul className="flex-1 flex justify-center gap-16 max-lg:hidden ">
  					{navLinks.map((item) => (
						   <li key={item.label} className="py-2 px-4 backdrop-blur-xl bg-white/20 border border-white/10 rounded-lg shadow-lg">
						   <a href={item.href} 
							  className="font-montserrat leading-normal text-lg text-slate-grey hover:text-blue-600 transition duration-200 ease-in-out">
							 {item.label}
						   </a>
						 </li> 
 					 ))}
				</ul>
				<div className="hidden max-lg:block">
					<img src={hamburger}
					width={25}
					height={25}
					/>
				</div>
			</nav>
		</header>
	);
};
