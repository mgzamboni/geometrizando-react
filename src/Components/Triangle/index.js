import React from "react";

class Triangle extends React.Component {
    render() {
        return(
            <div style={{borderBottomColor: this.props.color}} className="triangle"></div>
        )
    }
}

export default Triangle;