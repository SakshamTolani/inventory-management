import React,{useState,useContext} from "react";
import {Link,useHistory,useParams} from "react-router-dom"
import M from 'materialize-css'

const SignIn = () => {
    const history = useHistory()
    const [password,setPassword]=useState("")
    const {token} = useParams()
    console.log(token)
    const PostData = ()=>{
        fetch("/new-password",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                token
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                M.toast({html: data.error,classes:"#651fff deep-purple accent-3"})
            }
            else{
                M.toast({html: data.message,classes:"#4caf50 green"})
                history.push("/signin")
            }
            console.log(data)
        })
    }
    return (
        <div className="mycard">
            <div class="card auth-card input-field">
                <h2>Instabyte</h2>
                <input type="password" placeholder="Enter New Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className="btn waves-effect waves-light #0d47a1 blue light-4" onClick={()=>PostData()}>Update Password</button>
            </div>
        </div>
    )
}

export default SignIn;