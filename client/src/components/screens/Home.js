import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { Link, useHistory } from "react-router-dom";

const Home = () => {

  return (
    <div className="home" style={{margin:"300px 550px", border:"2px solid black", textAlign:"center"}}>
      {/* {data.map((item) => {
        return (
          <div className="card home-card">
            <h5 style={{ padding: "5px" }}>
              <Link
                to={
                  item.postedBy._id !== state._id
                    ? "/profile/" + item.postedBy._id
                    : "/profile"
                }
              >
                {item.postedBy.name}
              </Link>{" "}
              {item.postedBy._id == state._id && (
                <i
                  className="material-icons"
                  style={{
                    float: "right",
                  }}
                  onClick={() => deletePost(item._id)}
                >
                  delete
                </i>
              )}
            </h5>
            <div className="card-image">
              <img src={item.photo} />
            </div>

            <div className="card-content">
              <i className="material-icons" style={{ color: "red" }}>
                favorite
              </i>
              {item.likes.includes(state._id) ? (
                <i
                  className="material-icons"
                  onClick={() => unlikePost(item._id)}
                >
                  thumb_down
                </i>
              ) : (
                <i
                  className="material-icons"
                  onClick={() => likePost(item._id)}
                >
                  thumb_up
                </i>
              )}
              <h6 style={{ float: "right" }}>
                {new Date(item.updatedAt).toLocaleString("en-US", {
                  timeZone: "Asia/Kolkata",
                })}
              </h6>
              <h6>{item.likes.length} Likes</h6>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              {item.comments.map((record) => {
                return (
                  <h6 key={record._id}>
                    <span style={{ fontWeight: "500" }}>
                      {record.postedBy.name}
                    </span>{" "}
                    {record.text}
                    {(item.postedBy._id || record.postedBy._id) ==
                      state._id && (
                      <i
                        className="material-icons"
                        style={{
                          float: "right",
                        }}
                        onClick={() => deleteComment(item._id, record._id)}
                      >
                        delete
                      </i>
                    )}
                  </h6>
                );
              })}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  makeComment(e.target[0].value, item._id);
                }}
              >
                <input type="text" placeholder="add a comment" />
              </form>
            </div>
          </div>
        );
      })} */}
      <h5>Choose from the above options</h5>
    </div>
  );
};

export default Home;
