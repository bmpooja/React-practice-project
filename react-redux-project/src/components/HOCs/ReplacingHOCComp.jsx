import React, { Component } from 'react'

class ReplacingHOCComponent extends Component{
    state ={
        on: this.props.defaultOnvalue
    }

    toggle = () => {
        this.setState(prevState => {
           return { 
            on: !prevState.on
           }
        })
    }

    render(){
        return (
            <div>
                {this.props.test({
                    on: this.state.on, 
                    toggle: this.toggle
                })}
            </div>
        )
    }
}

export default ReplacingHOCComponent;