import React, { useState,useEffect } from "react";
import { Link, useHistory } from "react-router-dom"
import M from 'materialize-css'

const SignIn = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState(undefined)
    useEffect(()=>{
        if(url){
            uploadFields()
        }
    },[url])
    const uploadFields= ()=>{
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid Email", classes: "#d50000 red accent-4" })
            return
        }
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                password,
                pic:url
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#651fff deep-purple accent-3" })
                }
                else {
                    M.toast({ html: data.message, classes: "#4caf50 green" })
                    history.push("/signin")
                }
                console.log(data)
            })
    }
    const uploadPic = ()=>{
        const data = new FormData()
       data.append("file",image)
       data.append("upload_preset","instagram")
       data.append("cloud_name","sakshamtolani")
       fetch("	https://api.cloudinary.com/v1_1/sakshamtolani/image/upload",{
           method:"post",
           body:data
       })
       .then(res=>res.json())
       .then(data=>{
          setUrl(data.url)
       })
       .catch(err=>{
           console.log(err)
       })

    }
    const PostData = () => {
        if(image){
            uploadPic()
        }else{
            uploadFields()
        }
        
    }
    return (
        <div className="mycard">
            <div class="card auth-card input-field">
                <h2>Instabyte</h2>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type="text" placeholder="email address" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" placeholder="phone number" value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
                <div className="file-field input-field">
                    <div className="btn #64b5f6 blue darken-1">
                        <span>Upload Profile Picture</span>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn waves-effect waves-light #0d47a1 blue light-4" onClick={() => PostData()}>Register</button>
                <h5>
                    Already have an account?
                    <Link to="/Signin">Log In</Link>
                </h5>
                <Link to="/reset"><button className="btn waves-effect waves-light #263238 blue-grey darken-4">Forgot Password</button></Link>
            </div>
        </div>
    )
}

export default SignIn;