import {StarRating} from "./StarRating";

export const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-md"
      />

      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4 leading-normal font-semibold font-palanquin">{name}</h1>
        <p className="mb-4 mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
        <StarRating totalStars={5} />
      </div>
    </div>
  );
};