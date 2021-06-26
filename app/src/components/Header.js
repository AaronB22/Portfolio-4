import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css'
import AboutMe from "./AboutMe";
import MySkills from "./MySkills"
import Projects from "./Projects"

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            viewPage: ''
        }
    }

    about=()=>{
        this.setState({viewPage: <AboutMe />})
        this.forceUpdate()
    }
    skills=()=>{
        this.setState({viewPage: <MySkills />})
        this.forceUpdate()
    }
    projects=()=>{
        this.setState({viewPage: <Projects />})
        this.forceUpdate()
    }
    
    
    render(){
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light  myNav">
                <button className='btn ' onClick={this.about}>About Me!</button>
                <button className='btn' onClick={this.skills}>My Skills!</button>
                <button className='btn' onClick={this.projects}>My Projects!</button>
                <button className='btn'>Contanct Me!</button>
            </nav>
                <div>{this.state.viewPage}</div>
            </>
        )
    }





}