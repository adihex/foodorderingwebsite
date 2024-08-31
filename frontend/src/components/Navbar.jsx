import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import { useOrder } from "./ContextReducer";
function Navbar() {
  var [txtColor1, setColor1] = useState("black");
  var [txtColor2, setColor2] = useState("black");
  var [txtColor3, setColor3] = useState("black");
  var [txtColor4, setColor4] = useState("grey");
  // var [isLoggedIn, setLogin] = useState(false);
  const isLoggedIn = () => {
    if (localStorage.getItem("accessToken")) return true;
    else return false;
  };
  const navigate = useNavigate();
  let data = useOrder();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/" style={{ color: "black" }}>
            MYAB
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <div className="navbar-nav">
              {!isLoggedIn() ? (
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                  <div className="nav-item">
                    <Link
                      onMouseEnter={() => setColor1((txtColor1 = "blue"))}
                      onMouseLeave={() => setColor1((txtColor1 = "black"))}
                      className="nav-link"
                      to="/login"
                      style={{ color: `${txtColor1}` }}
                    >
                      Login
                    </Link>
                  </div>
                  <Link
                    onMouseEnter={() => setColor2("green")}
                    onMouseLeave={() => setColor2("black")}
                    className="nav-link"
                    to="/signup"
                    style={{ color: `${txtColor2}` }}
                  >
                    SignUp
                  </Link>
                </div>
              ) : (
                <div
                  className="nav-item"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div
                    style={{
                      display: "flex",
                      textAlign: "center",
                      marginRight: "20px",
                    }}
                  >
                    <Link
                      onMouseEnter={() => setColor3((txtColor1 = "red"))}
                      onMouseLeave={() => setColor3((txtColor3 = "black"))}
                      className="nav-link"
                      to="/cart"
                      style={{ color: `${txtColor3}` }}
                    >
                      MyCart
                    </Link>
                    <Badge
                      pill
                      bg="danger"
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                      {data.length}
                    </Badge>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        marginRight: "20px",
                      }}
                    >
                      <Link
                        onMouseEnter={() => setColor1((txtColor1 = "red"))}
                        onMouseLeave={() => setColor1((txtColor3 = "black"))}
                        className="nav-link"
                        to="/myOrder"
                        style={{ color: `${txtColor1}` }}
                      >
                        MyOrders
                      </Link>
                    </div>
                  </div>
                  <div>
                    <button
                      style={{
                        border: "0px",
                        backgroundColor: `${txtColor4}`,
                      }}
                      onMouseEnter={() => setColor4((txtColor4 = "red"))}
                      onMouseLeave={() => setColor4((txtColor4 = "grey"))}
                      className="nav-link"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
