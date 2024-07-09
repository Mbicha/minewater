import React from "react";
import MyLink from "./MyLink";
import SmallHeading from "./SmallHeading";

const Footer = () => {
    return(
        <footer className="absolute flex flex-row justify-evenly w-screen bottom-0 bg-[#1ca3ec]">
            <div className="flex flex-col w-1/2">
                <img src="/media/logo.svg" alt="" className="h-24 w-24"/>
            </div>
            <div className="flex flex-col justify-center p-1 w-1/2">
                <SmallHeading text={`More`}/>
                <MyLink path={`/about-us`} value={`About Us`} />
            </div>
        </footer>
    )
}

export default Footer;
