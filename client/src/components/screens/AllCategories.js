import React, { useEffect, useState } from 'react'
import M from 'materialize-css'
import { useHistory } from 'react-router-dom';

const AllCategories = () => {
  const history = useHistory();
  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);

  const deleteCategory = (categoryId)=>{
    fetch(`/deletecategory/${categoryId}`,{
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
            M.toast({html:"Category Deleted Successfully",classes:"#43a047 green darken-1"});
            history.go(0);
       }
    }).catch(err=>{
        console.log(err)
    })
}

const saveCategory = (categoryId, oldCategory)=>{
  if(categoryName==""){
    setCategoryName(oldCategory);
  }
  if(categoryName){
    fetch("/updatecategory",{
        method:"put",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            categoryName,
            categoryId
            
        })
    }).then(res=>res.json())
    .then(data=>{

       if(data.error){
          M.toast({html: data.error,classes:"#c62828 red darken-3"})
       }
       else{
           M.toast({html:"Category updated Successfully",classes:"#43a047 green darken-1"})
           history.go(0)
       }
    }).catch(err=>{
        console.log(err)
    })
}
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
return (
<div className="row">


<div className='category-btn' style={{margin:"10px"}}>
            <button onClick={()=>{
                history.push('/createcategory')
            }}>Add Category</button>
        </div>
    {allCategories.posts ? allCategories.posts.map((category)=>(

    
<div className="col s12 m6" key={category._id}>
  <div className="card blue-grey darken-0">
    <div className="card-content white-text">
        <label>Category Name: </label>
        <input defaultValue={category.categoryName} onChange={(e)=>setCategoryName(e.target.value)} />
    </div>
    <div className="card-action">
      <button onClick={()=>saveCategory(category._id,category.categoryName)}>Save</button>
      <button onClick={()=>deleteCategory(category._id)}>Delete</button>
    </div>
</div>
</div>
))
:
<div>
    <h5>No Category Found!!</h5>
</div>
}
</div>
)
}

export default AllCategories;