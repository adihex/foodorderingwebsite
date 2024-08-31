import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

// const categories = ["Biryani", "Drink", "Curry", "Bread"];

export default function Home() {
  const [foodCat, setFoodCat] = useState("Any");
  const [foodItem, setFoodItem] = useState([]);
  const url = "http://localhost:5000/api/dishes";
  const arr = ["Any", "Biryani", "Drink", "Curry", "Bread"];

  const loadData = async () => {
    let response;
    console.log("Fetching data...");
    if (foodCat === "Any") {
      response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      response = await fetch(`${url}/?category=${foodCat}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    response = await response.json();
    response.sort((a, b) => a.category.localeCompare(b.category));
    setFoodItem(response);
  };

  useEffect(() => {
    loadData();
  }, [foodCat]);

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        minHeight: "100vh",
        padding: "0 20px",
      }}
    >
      <Navbar />

      <Carousal />

      <div style={{ display: "flex", alignItems: "center", margin: "20px 0" }}>
        <h4 style={{ marginRight: "10px" }}>Select Category of food:</h4>
        <select
          onChange={(e) => setFoodCat(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          {arr.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {foodItem.map((item) => (
          <Card
            key={item.dish_id}
            dish_id={item.dish_id}
            price={item.dish_price}
            dishName={item.dish_name}
            imgUrl={item.image_url}
          />
        ))}
      </div>

      <Footer style={{ marginTop: "20px", backgroundColor: "white" }} />
    </div>
  );
}
