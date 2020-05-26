import React from 'react'
import './Char.css'


const Char = (props) => {

    const {clicked, letter} = props;

    return(
        <div className="Char" onClick={clicked}>
            {letter}
        </div>
    );
}

export default Char;