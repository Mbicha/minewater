import React from "react";

const MineButton = ({ text, clickEvent, params = {} }) => {
    const handleClick = () => {
        if (clickEvent) {
            clickEvent(params);
        }
    };

    return (
        <button onClick={handleClick}>
            {text}
        </button>
    );
}

export default MineButton;
