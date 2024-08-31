import React from "react";
import { useState } from "react";
import { useDispatchOrder, useOrder } from "./ContextReducer";

export default function Card(props) {
  let data = useOrder();
  let [qty, setQty] = useState(1);
  let itemPrice = props.price * qty;
  let src = props.image_url;
  var [bgColor, changeBackground] = useState("green");

  let dispatch = useDispatchOrder();
  const handleAddOrders = async () => {
    await dispatch({
      type: "Add",
      dish_id: props.dish_id,
      quantity: qty,
      imgUrl: props.imageUrl,
      price: props.price,
      name: props.dishName,
    });
  };

  return (
    <div>
      <div
        className="card mt - 3 m-3"
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img
          src={props.imgUrl}
          className="card-img-top"
          alt="..."
          style={{ height: "120px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ marginLeft: "20px" }}>
            {props.dishName}
          </h5>
          <div className="container w-100">
            <select
              className="m-2 h-100"
              onChange={(e) => setQty((qty = e.target.value))}
            >
              {Array.from(Array(10), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}
                  </option>
                );
              })}
            </select>

            {/* <select className = "m-2 h-100 rounded" >
                <option value = "half">half</option>
                <option value = "full">full</option>
              </select> */}

            <div className="d-block h-100 fs-5">
              Total Price = {itemPrice}Rs
            </div>

            <hr></hr>
            <button
              className="AddOrdersButton"
              onClick={handleAddOrders}
              style={{
                backgroundColor: `${bgColor}`,
                color: "white",
                border: "0px",
              }}
              onMouseEnter={() => changeBackground((bgColor = "#33cc00"))}
              onMouseLeave={() => changeBackground((bgColor = "green"))}
            >
              Add to MyCart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
