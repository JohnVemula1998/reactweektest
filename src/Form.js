import React,{Component} from "react";
import Card from "./Card";
import './Form.css'

class Form extends Component{
    printDetails(){
        let inp1=document.getElementById('inp1');
        let inp2 = document.getElementById('inp2');
        let card =<Card
        name={inp1.value}
        password ={inp2.value}/>
        let form = document.getElementById('cardcontainer');
        console.log(card);
        form.innerHTML = `<p>name: ${card.props.name} <br>
        password: ${card.props.password}</p>`;
        // this.Card.name = inp1.value;
        // this.Card.password = inp2.value;
    }
render(){
    return(
        <div>
        <div id="form" className="form">
            <h1>Login Form</h1>
            <input id="inp1" className="input"  type="text" placeholder="Enter User Name" required/>
            <input id="inp2" className="input" type="password" placeholder="Enter password" required/>
            <div>
                <button className="login" onClick={this.printDetails}>Login</button>
            </div>
            <button className="forget">Forget Passwprd ?</button>
        </div>
        <div id="cardcontainer"></div>
        <Card 
        name=""
        password=""/>
        </div>
    )
}
}

export default Form;