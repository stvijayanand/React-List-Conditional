import React from 'react'
import './Char.css'


const Char = (props) => {

    const {letter} = props;

    return(
        <div className="Char">
            {letter}
        </div>
    );
}

export default Char;