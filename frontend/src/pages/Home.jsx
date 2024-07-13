import React from "react";
import LargeHeading from "../components/LargeHeading";
import SmallHeading from "../components/SmallHeading";
const Home = () => {
    return(
        <>
            <section
                className="flex flex-col justify-center items-center mt-1/5 mb-28 bg-cover bg-center min-h-fit"
                style={{ backgroundImage: "url('/media/minewater.svg')" }}>
                    <LargeHeading text={`Welcome to MineWater`} />
                    <SmallHeading text={`The only place with pure, treated drinking water.`} />
            </section>            
        </>
    )
}

export default Home;
