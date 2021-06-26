import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AboutMe.css'



export default class AboutMe extends Component{
    constructor(props){
        super(props)
        this.state={
            // viewPage: 
        }
    }

    
    
    
    
    
    render(){
        return(
            <>
            <h1 className="h1 nameTag">Aaron Bailey</h1>
            <div className="myBioDiv">
                <p className="myBioTxt">
                   Hi! My name is Aaron Bailey! I'm current a student at UW! Curent studying to become a Full Stack Developer. I'm current living in the Seattle area.
                    <br></br>
                    <br></br>
                    Coding is amazing. I love the challenge and the creativity from it. Since I've started learning to code, I have found a new appreciation for the tech that powers are world.

                    <br></br>
                    I have came across many challenges has a coder. And overcoming those challenges is difficult, but the satisfaction when overcoming said challenge is like nothing else.
                    <br></br>
                    Current working with Javascript/Typescript. ALso learning React. Once my class is over I'm planning to learn C#. I have learned so much, but also have so much more to learn. Its a challenge learing all these things, but I love every second of it.

                </p>
            </div>
            </>
        )
    }

}