import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
const CretePost = ()=>{
    const history = useHistory()
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [allCategories, setAllCategories] = useState([])
    // useEffect(()=>{
    //    if(url){
    //     fetch("/createpost",{
    //         method:"post",
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Authorization":"Bearer "+localStorage.getItem("jwt")
    //         },
    //         body:JSON.stringify({
    //             name,
    //             price,
    //             stock,
    //             category
    //         })
    //     }).then(res=>res.json())
    //     .then(data=>{
    
    //        if(data.error){
    //           M.toast({html: data.error,classes:"#c62828 red darken-3"})
    //        }
    //        else{
    //            M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
    //            history.push('/')
    //        }
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // }
    // },[url])
  useEffect(() => {
    fetch("/allcategory",{
        method:"get",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        
    }).then(res=>res.json())
    .then(data=>{

       if(data.error){
          M.toast({html: data.error,classes:"#c62828 red darken-3"})
       }
       else{
           setAllCategories(data);
       }
    }).catch(err=>{
        console.log(err)
    })
  }, [])
  
    const postDetails = ()=>{
//        const data = new FormData()
//        data.append("file",image)
//        data.append("upload_preset","instagram")
//        data.append("cloud_name","sakshamtolani")
//        fetch("	https://api.cloudinary.com/v1_1/sakshamtolani/image/upload",{
//            method:"post",
//            body:data
//        })
//        .then(res=>res.json())
//        .then(data=>{
//           setUrl(data.url)
//        })
//        .catch(err=>{
//            console.log(err)
//        })

    fetch("/createpost",{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            name,
            price: Number(price),
            stock: Number(stock),
            category
        })
    }).then(res=>res.json())
    .then(data=>{

       if(data.error){
          M.toast({html: data.error,classes:"#c62828 red darken-3"})
       }
       else{
           M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
           history.go(0);
       }
    }).catch(err=>{
        console.log(err)
    })

    
   }
 

   return(
       <div className="card input-filed"
       style={{
           margin:"30px auto",
           maxWidth:"500px",
           padding:"20px",
           textAlign:"center"
       }}
       >
           <input 
           type="text"
            placeholder="Name of Product"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
           <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
             />
            <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e)=>setStock(e.target.value)}
             />
            <select className="browser-default" onChange={(e)=>setCategory(e.target.value)} defaultValue="default"> 
                <option value="default" disabled>Choose your category</option>
                {allCategories.posts && allCategories.posts.map(catg=>(
                   <option key={catg._id} value={catg._id}>{catg.categoryName}</option> 
                ))}
                
            </select>
           
           {/* <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div> */}
            <br></br>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>postDetails()}
            
            >
                Submit post
            </button>

       </div>
   )
}


export default CretePost