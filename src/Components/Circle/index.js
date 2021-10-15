import React from 'react'

class Circle extends React.Component {
    render () {
        //console.log(this.props)
        return(
            <div style={{background: this.props.color}} className="circle"></div> 
        )
    }
} 

export default Circle;