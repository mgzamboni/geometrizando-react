import React from "react";
import Square from "../Square"
import Circle from "../Circle"
import Triangle from "../Triangle"
import Rectangle from "../Rectangle"



class Figure extends React.Component {
    render () {
        if(this.props.type === 'square') {
            return (
                <Square color={this.props.color} />
            )
        }

        if(this.props.type === 'circle') {
            return (
                <Circle color={this.props.color} />
            )
        }

        if(this.props.type === 'triangle') {
            return (
                <Triangle color={this.props.color} />
            )
        }
        
        if(this.props.type === 'rectangle') {
            return (
                <Rectangle color={this.props.color} />
            )
        }
    }
} 

export default Figure;