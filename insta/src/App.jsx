import React, { Component } from "react";
import './App.css'
export class App extends Component{
      constructor(props){
        super(props)
            this.state={
            postarr:[
                {
                    id:1,
                    profile:"img/download (1).jpg",
                    name:"hema",
                    img:"../img/cat-computer (1).gif"
                   
                },
                {
                    id:2,
                    profile:"img/download (2).jpg",
                    name:"josef",
                    img:"img/feeling-the-nature-renforshort.gif"
                   
                },
                {
                    id:3,
                    profile:"img/download (3).jpg",
                    name:"Ankit p",
                    img:"img/field-nature.gif"
                   
                },
                {
                    id:4,
                    profile:"img/pillu.jpeg",
                    name:"Rudra Pandahre",
                    img:"img/giphy.gif"
                   
                },
                {
                    id:5,
                    profile:"img/download (4).jpg",
                    name:"Trisha mane",
                    img:"img/nature-photosession.gif"
                   
                },
                {
                    id:6,
                    profile:"img/download (5).jpg",
                    name:"priya",
                    img:"img/running-free-renforshort.gif"
                   
                },
                {
                    id:7,
                    profile:"img/IMG-20220611-WA0023.jpg",
                    name:"hema mane",
                    img:"img/coding.gif"
                  
                    
                }
            ]
        }
      }    

      render(){
        return(
            <>
            <div className="conatiner">
            <div className="header">
             <i className="fa-solid fa-camera"/>
                <span className="inst">Instagram</span>
                <i className="fa-solid fa-paper-plane"></i>
                <span>⋮</span>
               
                </div>
            
          
            {this.state.postarr.map((element)=>(
                  <div className="innerconatiner1">
                <div className="innerconatiner" key={element.id}>
                <div className="proname">
                <img className="profile" src={element.profile} alt="" />
                <p className="name" >{element.name}</p>
                </div>
                <div className="img">
                <img className="img" src={element.img} alt="" />
                </div>
                <div className="icons">
                <i className="fa-regular fa-heart" ></i>
                <i className="fa-regular fa-comment" ></i>
                <i className="fa-solid fa-paper-plane" ></i>
                <i className="fa-regular fa-bookmark" ></i>
                </div>
                </div>
             </div>    
            ))}
              <div className="footer">
            <span>▢</span>
            <i class="fa-solid fa-circle-dot"></i>
            <i class="fa-solid fa-caret-left"></i>
               
            </div>
            </div>
            </>
        )
    
    }
       
}













