import React from 'react';
import MemberList from './MemberList';
import '../style.css';


const CommunityHeader = (props) => {
    return (
        <div className='communityheader'>
            <img src={props.picture} />
            <h1>{props.id}</h1>
            <p>{props.description}</p>
            <MemberList />
        </div>
    );
}

export default CommunityHeader;