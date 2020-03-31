import React from 'react'



function CreditCard(props) {
    console.log(props);
    let color=props.color;
    let str1=props.number.substr(props.number.length-4);
    let numberCard=`···· ···· ···· ${str1}`;    
    let image='';
    let year=props.expirationYear.toString()
    let yTwo=year.substr(year.length-2);
    // let year=props.expirationYear.substr(props.expirationYear.length-2);
    console.log(yTwo);

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
            color:`${color}`
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
        mleft:{
            'margin-left':'25px',
        }
    };
    return (
        <div style={styles.div}>
            <div style={styles.type}>
                <img style={styles.img} src={image} alt=""/>
            </div>
            <div style={styles.number}>
                {numberCard}
            </div>
            <div>
                <span>Expires {props.expirationMonth} / {yTwo}</span><span style={styles.mleft}>{props.bank}</span>
            </div>
            <div>
            {props.owner}

            </div>
        </div>
    )
}

export default CreditCard