import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './Demo.css';

/* functional based
const Demo = (props) =>
{
    return <div class="style">
    <h1>Helloooo {props.name}</h1>
   <p>stay safe stay home</p>
   </div>

   OR    
}*/

const Demo = ({name}) =>
{
    return <div class="style">
    <h1>Helloooo {name}</h1>
   <p>stay home stay safe</p>
   </div>


}


/* //component based
class Demo extends Component{
    render(){
        
        return <div class="style">
         <h1>Helloooo {this.props.name}</h1>
        <p>stay safe stay home</p>
        </div>
    }
}*/

export default Demo;