import React from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons'; //css toolkit

const Avatar = (props) => {
    return (
    <div>
        <h1> WELCOME </h1>
        <Avatarlist id="1" name="Diksha" work="Web developer"/>
        <Avatarlist id="2" name="Daksha" work="Web developer"/>
        <Avatarlist id="3" name="dsfs" work="Web developer"/>
        <Avatarlist id="4" name="fdgd" work="Web developer"/>
        <button> Submit</button>
    </div>
)

}

export default Avatar;