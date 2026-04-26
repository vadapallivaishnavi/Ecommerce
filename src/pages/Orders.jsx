import React, { useEffect, useState } from "react";
import api from "../services/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const data = await api.getOrders();
      setOrders(data || []);
    } catch (error) {
      console.error("Fetch orders error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <div style={{ padding: "20px" }}>Loading orders...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "20px",
              background: "#fff",
            }}
          >
            <p><strong>Order ID:</strong> {order._id}</p>
            <p><strong>Placed By:</strong> {order.userName || order.user?.name || "Unknown User"}</p>
            <p><strong>Email:</strong> {order.user?.email || "N/A"}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Subtotal:</strong> ₹{order.subtotal}</p>
            <p><strong>Shipping:</strong> ₹{order.shipping}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p>
              <strong>Ordered On:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
            </p>

            <div style={{ marginTop: "10px" }}>
              <strong>Items:</strong>
              {order.items.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                    padding: "10px",
                    border: "1px solid #eee",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width="60"
                    height="60"
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <div>
                    <p style={{ margin: 0 }}><strong>{item.name}</strong></p>
                    <p style={{ margin: 0 }}>₹{item.price}</p>
                    <p style={{ margin: 0 }}>Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;