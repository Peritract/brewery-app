import React from 'react';

const ButtonControl = ({ displayText, clickHandler }) => {

    const relc = () => {
        clickHandler(3)
    }

    return <button onClick={ relc }>{ displayText }</button>
}

export default ButtonControl;
