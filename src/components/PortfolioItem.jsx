import React from "react";
import PropTypes from 'prop-types';  

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden dark:border-white">
      <img src={imgUrl} alt="portfolio" className="w-full h-36 md:h-48 object-cover cursor-pointer" />
      <div className="w-full p-4">
        <h3 className="text-lg dark:text-white md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {stack.map((itemName, index) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md dark:border-white" key={index}>
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

//adding an edit to check git pushes