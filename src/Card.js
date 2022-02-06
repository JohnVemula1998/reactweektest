import React,{Component} from "react";

class Card extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container">
                <div className="card">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.password}</p>
                </div>
            </div>
        )
    }
}
export default Card;