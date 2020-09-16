import React from 'react'

function RenderPropComp (props){
    console.log(props.name);
    return (
        <div style= {{display: 'inline-block'}}>
            <h1>Hi {props.test("Khushi❤️Tanvi", true, 10)} </h1>
            <button style={{marginRight: '10px'}}>Click Me</button>
            <input type = "text"></input>
            <div class="box" ></div>
        </div>
    )
}

export default RenderPropComp;