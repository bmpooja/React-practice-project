// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities
import React, {Component} from 'react';

class Toggler extends Component{
    state = {
        on:this.props.defaultOnvalue
    }

    toggle = () => {
        this.setState(prevState => {
                return {
                    on : !prevState.on
                }
        })
    }
    render(){
        const Component = this.props.component
        return(
            <Component on={this.state.on} toggle={this.toggle} {...this.props}/>
        )
    }

}
export function withToggler(component, optnObj){
    return function(props){
        return(   
                <Toggler component = {component} defaultOnvalue={optnObj.defaultOnvalue} {...props}/>
        )
    }
}
