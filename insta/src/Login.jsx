import React, {Component} from "react";

export class Login extends Component{
       constructor(props){
        super(props)
        this.state={
           
           logindata:[
                {
                  
                   username: ["vasanth", "prakash","souvik","hema"],
                   password:[234586297,244689297,2386216297,2349218697]
                }
            ],
           
        }
       }

    loginhere(){
        if(username.innerText===this.state.name && password.innerText===this.state.password){
            return "succesfully login"
        }else{
            return  "invalid username" && "invalid password"
           
        }
    }

    render(){
        return(
            
            <>
         {this.state.logindata.map((element)=>{
            return(
 <div >
    <form action="submit">
        <label htmlFor="username">username:</label>
        <input onChange={loginhere()=this.state.username} type="text" key={element.name} value={this.state.username} />
       <label htmlFor="password">password</label>
       <input onChange={loginhere()=this.state.password} type="text" key={element.password} value= {this.state.username} />
</form>
</div>)
         })}
           
            </>
        )
    }
}