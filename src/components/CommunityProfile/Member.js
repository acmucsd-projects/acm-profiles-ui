import React from 'react';
import '../style.css';


const Member = (props) => {
    return (
        <div className='member'>
            <img src={props.picture} />
            <h3>{props.name}</h3>
            <p>{props.year} year {props.major} major @ {props.college}</p>
        </div>
    );
}

export default Member;