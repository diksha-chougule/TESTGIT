import React from 'react';


const Avatarlist = (props) => {
    return (
    <div className ="avatar_style ma4 bg-light-purple dib pa4">
        <img src={'https://joeschmoe.io/api/v1/${props.name}'} alt="avatar"/>
        <h1 className=""> {props.name} </h1>
        <p>{props.work}</p>
        
    </div>
)

}

export default Avatarlist;