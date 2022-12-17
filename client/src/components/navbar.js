import React, { useContext, useRef, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css'
import { UserContext } from '../App';

const NavBar = () => {
  const { state, dispatch } = useContext(UserContext)
  const [ search, setSearch ] = useState('')
  const [userDetails, setUserDetails] = useState([])
  const history = useHistory()
  const searchModal = useRef(null)
  useEffect(() => {
    M.Modal.init(searchModal.current)
  }, [])
  const renderList = () => {
    if (state) {
      return [
        // <li key="1"><i data-target="modal1" className="large material-icons modal-trigger" style={{ color: "black", marginLeft: "10px" }}>search</i></li>,
        <li key="1"><Link to="/posts">Products</Link></li>,
        <li key="2"><Link to="/profile">Profile</Link></li>,
        <li key="3"><Link to="/categories">Categories</Link></li>,
        // <li key="4"><Link to="/myfollowingpost">Following's Posts</Link></li>,
        <li key="5">
          <button className="btn waves-effect waves-light #0d47a1 blue light-4"
            onClick={() => {
              localStorage.clear()
              dispatch({ type: "CLEAR" })
              history.push("/signin")
            }}>Log Out</button>
        </li>

      ]
    } else {
      return [
        <li key="6"><Link to="/Signin">Login</Link></li>,
        <li key="7"><Link to="/signup">Signup</Link></li>
      ]
    }
  }
  

  const fetchUsers = (query)=>{
    setSearch(query)
    fetch('/search-users',{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        query
      })
    }).then(res=>res.json())
    .then(results=>{
      setUserDetails(results.user)
    })
 }
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/signin"} className="brand-logo center">Inventory Management</Link>
        <ul id="nav-mobile" className="left">
          {renderList()}

        </ul>
      </div>
      {/* <div id="modal1" className="modal modal-fixed-footer" ref={searchModal} style={{ color: "black" }}>
        <div className="modal-content">
          <input type="text" placeholder="Search Username" value={search} onChange={(e) => fetchUsers(e.target.value)} />
          <ul className="collection">
            {userDetails.map(item=>{
              return <Link to={item._id !== state._id?"/profile/"+item._id:"/profile"} onClick={()=>{
                M.Modal.getInstance(searchModal.current).close()
                setSearch('')
              }}><li className="collection-item">{item.name}</li></Link>
            })}
          </ul>
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-green btn-flat" onClick={()=>setSearch('')}>Close</button>
        </div>
      </div> */}
    </nav>
  )
}

export default NavBar