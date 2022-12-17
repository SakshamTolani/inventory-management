import React, { useEffect, useState } from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'

const AllPosts = () => {
    const history = useHistory();
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState(0);
    const [productStock, setProductStock] = useState(0);
    const [allProducts, setAllProducts] = useState([]);
    const [allCategories, setAllCategories] = useState([])
    const [productCategory, setProductCategory] = useState("");

    
    const savePost = (postId,postName,postPrice,postStock,postCategory)=>{
        if(productName==""){
            setProductName(postName);
        }
        if(productPrice==0){
            setProductPrice(postPrice);
        }
        if(productStock==0){
            setProductStock(postStock);
        }
        if(productCategory==""){
            setProductCategory(postCategory);
        }
        if(productName && productPrice && productStock && productCategory){
            fetch("/updateproduct",{
                method:"put",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    name:productName,
                    price:productPrice,
                    stock:productStock,
                    category:productCategory,
                    postId
                    
                })
            }).then(res=>res.json())
            .then(data=>{
        
               if(data.error){
                  M.toast({html: data.error,classes:"#c62828 red darken-3"})
               }
               else{
                   M.toast({html:"Product updated Successfully",classes:"#43a047 green darken-1"})
                   history.go(0)
               }
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    const deletePost = (postId)=>{
        fetch(`/deletepost/${postId}`,{
            method:"delete",
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
                M.toast({html:"Product Deleted Successfully",classes:"#43a047 green darken-1"});
                history.go(0);
           }
        }).catch(err=>{
            console.log(err)
        })
    }

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

    useEffect(() => {
        fetch("/allpost",{
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
               setAllProducts(data);
           }
        }).catch(err=>{
            console.log(err)
        })
      }, [])
  return (
    <div className="row">
        <div className='post-btn' style={{
            margin:"10px"
            
        }}>
            <button onClick={()=>{
                history.push('/createpost')
            }}>Add Product</button>
        </div>
        {allProducts.posts? allProducts.posts.map((post)=>(
            
        
    <div className="col s12 m6" key={post._id}>
      <div className="card blue-grey darken-0">
        <div className="card-content white-text">
            <label>Product Name: </label>
            <input  type="text" defaultValue={post.name} onChange={(e)=>setProductName(e.target.value)} />
            
            <label>Price: </label>
            <input defaultValue={post.price} onChange={(e)=>setProductPrice(e.target.value)}/>
            
            <label>Stock: </label>
            <input defaultValue={post.stock} onChange={(e)=>setProductStock(e.target.value)} />
            
            <label>Category: </label>
            <select className="browser-default" onChange={(e)=>setProductCategory(e.target.value)} defaultValue={post.category}> 
                
                <option value="default" disabled>Choose your category</option>
                {allCategories.posts && allCategories.posts.map(catg=>(
                   <option key={catg._id} value={catg._id}>{catg.categoryName}</option> 
                ))}
                
            </select>
            
            
        </div>
        <div className="card-action">
        <button onClick={()=>savePost(post._id,post.name,post.price,post.stock,post.category)}>Save</button>
          <button onClick={()=>deletePost(post._id)}>Delete</button>
        </div>
    </div>
    </div>
    ))
    :
    <div>
    <h5>No Product Found!!</h5>
    </div>
}
  </div>
  )
}

export default AllPosts;