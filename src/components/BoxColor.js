import React from 'react'

function BoxColor(props) {
    // console.log(props);
    let red =  props.r;
    let green =  props.g;
    let blue =  props.b;
    let color = `rgb(${red}, ${green}, ${blue})`;
    let hexColor ='#'+((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
    // console.log(hexColor);
    let colorText;
    if(hexColor==='#ff0000'){
        // console.log('hola')
        colorText='white'
    }else{
        colorText='black'
    }
    const styles = {
        color: {
            background: `${color}`,
            height:'100px',
            'text-align':'center',
            border: "px solid black"
        },
        text: {
            position: 'relative',
            top: '50%',
            transform:'translate(0%,-50%)',
            color:`${colorText}`
        }
    };
    return (
        <div style={styles.color}>
            <p style={styles.text}>{color} <br/> {hexColor}  </p>
        </div>
    )
}

export default BoxColor

