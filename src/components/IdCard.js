import React from 'react'

export default function IdCard(props) {
    const date = props.birth.getDate();
    const year = props.birth.getFullYear();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dateName = dayNames[props.birth.getDay()];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthNames[props.birth.getMonth()];
    const styles = {
        container: {
            display: 'flex',
            border: "1px solid black"
        }
    };
    return (
        <div style={styles.container}>
        <div>
            <img src={props.picture} alt={props.firstName} />
        </div>
            <div>
                <p><b>First name:</b> {props.firstName}</p>
                <p><b>Last name:</b> {props.lastName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>First name:</b> {props.height}</p>
                <p><b>Birth:</b>{dateName} {monthName} {date} {year} </p>
            </div>
        </div>
    )
}
