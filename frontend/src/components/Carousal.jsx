import React from "react";
// import bigsandwich from './assets/bigsandwich.jpeg';
// import image1 from "./images";
export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ objectFit: "cover !important" }}
      >
        <div className="carousel-inner" id="carousal">
          <div
            className="carousel-caption d-none d-md-block"
            style={{ zIndex: "10" }}
          >
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
          <div className="carousel-item active" style={{ objectFit: "fill" }}>
            <img
              src="https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=1380&t=st=1683165497~exp=1683166097~hmac=4cd27b8afdec39e71a432b8d5b67bc4887e29825a98ba681ba2a0c2e298dfe4b"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "fill" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/indian-condiments-with-copy-space-view_23-2148723492.jpg?w=1480&t=st=1683151912~exp=1683152512~hmac=ca5cf8ff5125022738f6b7266a37ebe324cf21c64731662d7ee54920c599f326"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "fit" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=1380&t=st=1683165577~exp=1683166177~hmac=8cb8ebbf1080b2eaa7f781bc30f588a9e33eb06a2da7777bf5edf5f43037c40b"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
