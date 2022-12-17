import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'

const CreateCategory = ()=>{
    const history = useHistory();
    const [categoryName, setCategoryName] = useState("");
    const categoryDetails = ()=>{
        fetch("/createcategory",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                categoryName,
            })
        }).then(res=>res.json())
        .then(data=>{
    
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"Created category Successfully",classes:"#43a047 green darken-1"})
               history.push('/categories')
           }
        }).catch(err=>{
            console.log(err)
        })
    }


    return <div className="card input-filed"
    style={{
        margin:"30px auto",
        maxWidth:"500px",
        padding:"20px",
        textAlign:"center"
    }}>
        <input 
           type="text"
            placeholder="Name of Category"
            value={categoryName}
            onChange={(e)=>setCategoryName(e.target.value)}
        />
        <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>categoryDetails()}
            
            >
                Submit Category
            </button>
    </div>
}

export default CreateCategory;