import React from "react";
import { Link } from "react-router-dom";

const MyLink = ({ path, value, mr }) => {
    return(
        <Link to={path} className="flex w-auto h-auto mr-[mr]">{value}</Link>
    )
}

export default MyLink;
