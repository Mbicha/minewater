import React from "react";
import MyLink from "./MyLink";
import SmallHeading from "./SmallHeading";

const Footer = () => {
    return(
        <footer className="absolute flex flex-col justify-evenly w-screen bottom-0 bg-[#1ca3ec]">
            <div className="flex flex-row">
                <div className="flex flex-col w-1/2">
                    <img src="/media/logo.svg" alt="" className="h-20 w-20"/>
                </div>
                <div className="flex flex-col justify-center p-1 w-1/2">
                    <SmallHeading text={`More`}/>
                    <MyLink path={`/about-us`} value={`About Us`} />
                </div>
            </div>
            <div className="">
                <SmallHeading text={`Copyright 2024`}/>
            </div>            
        </footer>
    )
}

export default Footer;
