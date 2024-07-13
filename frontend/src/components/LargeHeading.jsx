import React from "react";

const LargeHeading = ({text}) => {
    return(
        <div className="flex justify-center w-full p-1 text-3xl font-bold underline">
            {text}
        </div>
    )
}

export default LargeHeading;
