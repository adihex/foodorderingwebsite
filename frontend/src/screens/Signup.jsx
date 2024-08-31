import { React, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone_no: " ",
    password: "",
  });

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log("hi");
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/users/signup";
    const data = {
      customer_name: credentials.name,
      email: credentials.email,
      password: credentials.password,
    };
    console.log(data);
    axios
      .post(url, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then(({ data }) => {
        console.log(data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{ /*padding: "0px", margin: '0px',*/ backgroundColor: "white" }}
    >
      <div
        className="container"
        style={{
          padding: "100px",
          paddingTop: "50px",
          border: "2px solid black",
          boxSizing: "border-box",
          height: "650px",
          width: "500px",
          marginTop: "50px",
          backgroundColor: "white",
        }}
      >
        <h4
          style={{ color: "black", textAlign: "center", marginBottom: "20px" }}
        >
          Create an Account
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Enter new user name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="exampleInputName1"
              aria-describedby="nameHelp"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={credentials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="exampleInputPassword1"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button type="submit" className="btn btn-primary">
              SignUp
            </button>
            <Link to="/">
              <button type="button" className="btn btn-primary">
                Home
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
