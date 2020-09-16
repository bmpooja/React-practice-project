import React from 'react'
import ReplacingHOCComponent from './HOCs/ReplacingHOCComp'


function RenderPMenu (props){
    return (
        <ReplacingHOCComponent defaultOnvalue= {true} test = {(obj) => (
            <div>
                <h1> Menu is from Rendering Prop Component</h1>
                <button onClick = {obj.toggle} style ={{ background : obj.on ? 'red' : 'green'}}> Click Me</button>
            </div>   
        )}/>
    )
}

export default RenderPMenu