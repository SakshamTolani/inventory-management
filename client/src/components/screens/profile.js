import React, { useEffect, useState, useContext } from "react";
import M from 'materialize-css'
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [mypics, setPics] = useState([]);
  const [data, setData] = useState([]);
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const [image, setImage] = useState("");



  const saveProfile = (categoryId, oldCategory)=>{
    if(userName==""){
      setUserName(state.name);
    }
    if(userEmail==""){
      setUserEmail(state.email);
    }
    if(userPhone==""){
      setUserPhone(state.phone);
    }
    if(userName && userEmail && userPhone){
      fetch("/updatepic",{
          method:"put",
          headers:{
              "Content-Type":"application/json",
              "Authorization":"Bearer "+localStorage.getItem("jwt")
          },
          body:JSON.stringify({
              name:userName,
              email:userEmail,
              phone:userPhone
              
          })
      }).then(res=>res.json())
      .then(data=>{
  
         if(data.error){
            M.toast({html: data.error,classes:"#c62828 red darken-3"})
         }
         else{
             M.toast({html:"Profile updated Successfully",classes:"#43a047 green darken-1"})
             fetch(`/user/${state._id}`,{
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
                data.user && localStorage.setItem("user", JSON.stringify(data.user));
                dispatch({ type: "USER", payload: data.user });
                // history.go(0)
             }
          }).catch(err=>{
              console.log(err)
          })
          
         }
      }).catch(err=>{
          console.log(err)
      })
  }
  }
  // useEffect(() => {
  //   fetch("/mypost", {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("jwt"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       setPics(result.mypost);
  //     });
  // }, []);
  // useEffect(() => {
  //   if (image) {
  //     const data = new FormData();
  //     data.append("file", image);
  //     data.append("upload_preset", "instagram");
  //     data.append("cloud_name", "sakshamtolani");
  //     fetch("https://api.cloudinary.com/v1_1/sakshamtolani/image/upload", {
  //       method: "post",
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         fetch("/updatepic", {
  //           method: "put",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: "Bearer " + localStorage.getItem("jwt"),
  //           },
  //           body: JSON.stringify({
  //             pic: data.url,
  //           }),
  //         })
  //           .then((res) => res.json())
  //           .then((result) => {
  //             console.log(result);
  //             localStorage.setItem(
  //               "user",
  //               JSON.stringify({ ...state, pic: result.pic })
  //             );
  //             dispatch({ type: "UPDATEPIC", payload: result.pic });
  //             //window.location.reload()
  //           });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [image]);
  // const updatePhoto = (file) => {
  //   setImage(file);
  // };
  return (
    <div>
    <div style={{ maxWidth: "550px", margin: "0px auto" }}>
      <div
        style={{
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <img
              style={{ width: "160px", height: "160px", borderRadius: "80px" }}
              src={state ? state.pic : "loading"}
            />
          </div>
          <div>
            <h4>{state ? state.name : "loading"}</h4>
            <h5>{state ? state.email : "loading"}</h5>
            <h5>{state ? state.phone : "loading"}</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "108%",
              }}
            >
              {/* <h6>{mypics.length} posts</h6> */}
              {/* <h6>{state ? state.followers.length : "0"} followers</h6>
              <h6>{state ? state.following.length : "0"} following</h6> */}
            </div>
          </div>
        </div>

        {/* <div className="file-field input-field" style={{ margin: "10px" }}>
          <div className="btn #64b5f6 blue darken-1">
            <span>Update pic</span>
            <input
              type="file"
              onChange={(e) => updatePhoto(e.target.files[0])}
            />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div> */}
      </div>
      {/* <div className="gallery">
        {mypics.map((item) => {
          return (
            <img
              key={item._id}
              className="item"
              src={item.photo}
              alt={item.title}
            />
          );
        })}
      </div> */}
    </div>
    <div className="row" style={{ maxWidth: "550px", margin: "15px auto" }}>
      <div className="col s12 m6">
        <div>
          <div className="card-content white-text">
            <label>User Name: </label>
            <input defaultValue={state? state.name : ""} onChange={(e)=>setUserName(e.target.value)} />
            <label>Email: </label>
            <input defaultValue={state? state.email : ""} onChange={(e)=>setUserEmail(e.target.value)} />
            <label>Phone: </label>
            <input defaultValue={state? state.phone : ""} onChange={(e)=>setUserPhone(e.target.value)} />
          </div>
        <div className="card-action">
          <button onClick={saveProfile}>Save</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Profile;
