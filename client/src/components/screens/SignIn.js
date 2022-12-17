import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import M from "materialize-css";

const SignIn = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "Invalid Email", classes: "#d50000 red accent-4" });
      return;
    }
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({
            html: data.error,
            classes: "#651fff deep-purple accent-3",
          });
        } else {
          if (data.user !== undefined) {
            localStorage.setItem("jwt", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            dispatch({ type: "USER", payload: data.user });
            M.toast({
              html: "Signed In Successfully",
              classes: "#4caf50 green",
            });
            history.push("/");
          } else {
            M.toast({
              html: "Enter correct password",
              classes: "#4caf50 red",
            });
          }
        }
        console.log(data);
      });
  };
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instabyte</h2>
        <input
          type="text"
          placeholder="email address or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light #0d47a1 blue light-4"
          onClick={() => PostData()}
        >
          Log In
        </button>
        <h5>
          Dont have an account?
          <Link to="/Signup">Sign Up</Link>
        </h5>
        <Link to="/reset">
          <button className="btn waves-effect waves-light #263238 blue-grey darken-4">
            Forgot Password
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
