import React from 'react';
import Timeline from './Timeline';
import PropTypes from 'prop-types';  

function Timelineitem({year, title, duration, details}){
    return(
        <ol className='flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700'></div>
                <div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md dark:text-stone-900 dark:bg-white'>
                        {year}
                    </span>
                    <h3 className='dark:text-white text-lg font-semibold text-stone-900'>
                        {title}
                    </h3>
                    <div className='dark:text-stone-500 my-1 text-sm font-normal leading-none text-stone-400'>
                        {duration}
                    </div>
                </div>
                <p className='dark:text-stone-400 my-2 text-base font-normal text-stone-500'>
                    {details}
                </p>
            </li>
        </ol>
    )
}
Timelineitem.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  };

export default Timelineitem;