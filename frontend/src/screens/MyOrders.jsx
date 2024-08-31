import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatchOrder, useOrder } from "../components/ContextReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function MyOrders() {
  const navigate = useNavigate();
  // let dispatch = useDispatchOrder();
  const [orderData, setorderData] = useState([]);
  const fetchMyOrder = () => {
    const token = localStorage.getItem("accessToken");
    const user_id = localStorage.getItem("user");
    let config = {
      method: "get",
      url: "http://localhost:5000/api/orders/",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      params: { _id: user_id },
    };
    axios(config)
      .then((response) => {
        setorderData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // let navigate = useNavigate(); let totalPrice = data.reduce( (total, food) => parseInt(total) + parseInt(food.quantity) * parseInt(food.price), 0);
  useEffect(() => {
    fetchMyOrder();
  }, []);

  if (orderData == {}) return "Some error";
  return (
    <div>
      <div style={{ backgroundColor: "lightgrey" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "red",
            color: "white",
            justifyContent: "center",
          }}
        >
          Go to Home
        </button>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h5 className="order-title" style={{ marginLeft: "20px" }}></h5>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Order Id</th>
                <th scope="col">Dish Id</th>
                <th scope="col">Dish Name</th>

                <th scope="col">Status</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order, index) => {
                return order.DishesOrdereds.map((dish) => {
                  return (
                    <tr>
                      <td> {order.order_id}</td>
                      <td> {dish.Dish.dish_id}</td>
                      <td> {dish.Dish.dish_name}</td>

                      <td>{order.order_status}</td>
                      <td>{order.order_time}</td>
                    </tr>
                  );
                });
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
