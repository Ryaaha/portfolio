import React from "react";
import PropTypes from 'prop-types';  

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div>
      <img src={imgUrl} alt="portfolio" className="w-full h-36 md:h-48 object-cover cursor-pointer" />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((itemName, index) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md" key={index}>
              {itemName}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
};

export default PortfolioItem;
