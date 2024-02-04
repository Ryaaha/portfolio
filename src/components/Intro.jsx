import React from "react";

function Intro()
{
    return( 
        <div className="flex items-center justify-Center flex-col text-center pt-20 pb-6">
            <h1 className="text-3xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Vinit</h1>
            {/*md is the meduim tag used for responsiveness it changes here when you reach the medium treshold,
            it can also be configured using sm tag for small etc.
            mb is margin bottom*/}
            <p className="text-base md:text-xl max-w-xl mb-3 font-meduim">This is a Portfolio for showcasing my projects <br />
            I am currently a Sophomore pursuing my Bachelors in Computer Science at University of Petroleum and Energy Studies, Dehradun.</p>
        </div>
    )
}

export default Intro;