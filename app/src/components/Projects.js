import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from '../projects.json'
import "../css/Projects.css"
import ToolShareImg from "../img/ToolShare.png"



export default class AboutMe extends Component{
    constructor(props){
        super(props)
        this.state={
           imgsArr:[ToolShareImg]
        }
    }

    
    
    
    render(){
        return(
            <>
                <h1 className="pageHeader">My Projects!</h1>
                {projects.map((value, index)=>{
                    return(
                        <div key={index} className="card">
                            <h3 className='projectTitle'>{value.title}</h3>
                            <img className="projectImg" alt={value.title} src={this.state.imgsArr[0]}></img>
                            <p className="projectTxt">{value.des}</p>
                            <div className="links">
                                <p className="depLink">Deploy Link: <a href={value.deploy}> {value.deploy}</a> </p>
                                <p className="gitLink"> GitHub Link: <a href={value.gitLink}> {value.gitLink} </a> </p>
                                
                            </div>

                        </div>

                    )

                }
                )}
                
            </>
        )
    }

}