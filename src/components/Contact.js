import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Contact.css'



export default class Contact extends Component{
   

    
    
    
    
    
    render(){
        return(
            <>
                    <h1 className="conHeader">Contact Me!</h1>
                <div className="container mainDiv">
                    <p className="conTxt">Email: <a className="txt">Aaron__Bailey@outlook.com</a></p>
                    <p className="conTxt">Phone: <a className="txt">number: (253)-797-2573</a></p>
                    <p className="conTxt txt"><a href="https://github.com/AaronB22" >GitHub</a> </p>
                    <p className="conTxt txt"><a href="https://www.linkedin.com/in/aaron-bailey-08486320a/" >Linkedin</a> </p>


                </div>
            </>
            
        )
    }

}