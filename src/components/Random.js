import React from 'react'

function Random(props) {
    // console.log(props);
    let maxNum=props.max;
    let randomNumber = Math.floor((Math.random() * maxNum) + 1);

    return (
        <div>
            <p>Random value between {props.min} and {props.max} => {randomNumber}</p>
        </div>
    )
}

Random.propTypes = {

}

export default Random

