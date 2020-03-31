import React from 'react'

function Greetings(props) {
    // console.log(props);
    let wellcome='';
    if(props.lang === 'de'){
       wellcome = 'Hallo'; 
    }else if(props.lang === 'fr'){
       wellcome = 'Bonjour';
    }
    const styles = {
        border: {
            border: "1px solid black"
        }
    };
    return (
        <div style={styles.border}>
            <h2>{wellcome} {props.children}</h2>
        </div>
    )
}

export default Greetings
