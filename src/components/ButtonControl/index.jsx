import React from 'react';

const ButtonControl = ({ displayText, clickHandler }) => {
    return <button onClick={ clickHandler }>{ displayText }</button>
}

export default ButtonControl;
