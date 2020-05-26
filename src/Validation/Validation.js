import React from 'react'


const Validation = (props) => {

    const {length} = props;

    let comment = '';
    if(length < 5){
        comment = 'Text too short';
    }
    else{
        comment = 'Text long enough';
    }

    return(
        <p>{comment}</p>
    );
}







export default Validation