import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/MySkills.css'



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
            <div className="skillBody">
            <h1 className="h1 skillsTag">Skills</h1>
            <div className="primaryDiv">
               
                    <h4 className="subHead">Primary Languages</h4>
                    <p className="listItems">HTML</p>
                    <p className="listItems">CSS</p>
                    <p className="listItems">Javascript</p>
                
            </div>

            <div className="primaryDiv">
               
               <h4 className="subHead">DataBases</h4>
               <p className="listItems">MySQL</p>
               <p className="listItems">Mongo</p>
           
            </div>

            <div className="primaryDiv">
               
               <h4 className="subHead">JS Libraries</h4>
               <p className="listItems">Node.js</p>
               <p className="listItems">Express.js</p>
               <p className="listItems">React.js</p>
               <p className="listItems"></p>
           
            </div>
            </div>
            

            </>
        )
    }





}