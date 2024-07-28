// // import { star } from "../assets/icons";
// import { StarRating } from "./StarRating";

// export const PopularProductCard = ({ imgURL, name}) => {
// 	return (
// 		<div className="flex flex-1 flex-col w-full max-sm:w-full">
		
//       <img src={imgURL} alt={name} className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover" />

//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl mb-4">Star Rating Component</h1>
//       <StarRating totalStars={5} />
//     </div>
// 		</div>
// 	);
// };


// 	{/* <div className="mt-8 flex justify-start gap-2.5">
// 				<img src={star} alt="rating" width={24} height={24} />
// 				<p className="font-montserrat text-xl leading-normal text-slate-gray">
// 					{4.5}
// 				</p>
// 			</div> */}

// import { star } from "../assets/icons";

import {StarRating} from "./StarRating";

export const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
      />

      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">{name}</h1>
        <p className="text-lg text-gray-700 mb-4">{price}</p>
        <StarRating totalStars={5} />
      </div>
    </div>
  );
};
