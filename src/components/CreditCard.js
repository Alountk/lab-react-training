import React from 'react'



function CreditCard(props) {
    // console.log(props);
    // let bgColor = props.bgColor;
    // let rgbColor = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(bgColor);
    // let red=parseInt(rgbColor[1], 16);
    // let green=parseInt(rgbColor[2], 16);
    // let blue=parseInt(rgbColor[3], 16);
    let str1=props.number.substr(props.number.length-4);
    let str2=props.number.slice(0,-4);
    let numberCard;
    function numberToHash (str2){
        for(let i=0;i<str2.length;i++){
            numberCard+='·';
        }
    }
    numberToHash(str2);
    let str3=numberCard.concat(str1)
    console.log(str3);
    
    
    let image='';
    if(props.type==='Visa'){
        image='../img/visa.png'
    }else if(props.type==='Master Card'){
        image='../img/master-card.svg'
    }

    const styles = {
        div: {
            display:'inline-block',
            background:`${props.bgColor}`,
            margin:'10px',
            padding:'20px',
            'border-radius':'10px',
            'height':'175px',
            'width':'300px',
        },
        type:{
            'text-align':'right',
        },
        img: {
            height:'20px',
            // position:'relative',
            // top:'10px',
            // left:'250px'   
        },
        number:{
            'font-size':'1.9em',
            'text-align': 'center',
            margin: '20px 0',
        },
    };
    return (
        <div style={styles.div}>
            <div style={styles.type}>
                <img style={styles.img} src={image} alt=""/>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default CreditCard