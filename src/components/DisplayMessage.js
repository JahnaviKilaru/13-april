import React from "react";

class DisplayMessage extends React.Component{
    state={
        date:new Date().toLocaleString("en-Us",{hour:"numeric",minute:"numeric"})
    }
    render(){
        return(
            <div>
                <p>
                    
                    {this.props.message}
                    <span>{this.state.date}</span>
                </p>
            </div>
        )
    }
    
}
export default DisplayMessage
