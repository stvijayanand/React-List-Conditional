import React from 'react'


const Validation = (props) => {

    const {length} = props;

    let comment = '';
    if(length < 5){
        comment = 'Text too short';
    }
    else{
        comment = 'Text too long';
    }

    return(
        <p>{comment}</p>
    );
}







export default Validation