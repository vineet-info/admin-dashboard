import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoe",
    photo: img,
    _id: "qerwtgdfsd",
    quantity: 5,
    price: 2000,
  },
];
function TransactionManagement() {
  const [order, setOrder] = useState<OrderType>({
    _id: "aesrhsfd",
    name: "Vk",
    address: "A-401, Aircastles",
    city: "pune",
    state: "maharashtra",
    country: "india",
    pinCode: 411057,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
  });

  const {
    name,
    address,
    city,
    state,
    country,
    pinCode,
    status,
    subtotal,
    discount,
    shippingCharges,
    tax,
    total,
  } = order;

  const updateHandler = () => {
    setOrder((prevState) => ({
      ...prevState,
      status: prevState.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="admin-container">
      {/* SideBar */}
      <AdminSidebar />
      {/* Main */}
      <main className="product-management">
        <section style={{ padding: "2rem" }}>
          <h2>Order Items</h2>
          {order.orderItems.map((i) => (
            <ProductCard
              _id={i._id}
              name={i.name}
              photo={i.photo}
              price={i.price}
              quantity={i.quantity}
            />
          ))}
        </section>
        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}
          </p>

          <h5>Amount Info</h5>
          <p>SubTotal: {subtotal}</p>
          <p>Shipping Charges:{shippingCharges}</p>
          <p>Taxes: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total Amount: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            {
              <span
                className={
                  status === "Delivered"
                    ? "purple"
                    : status === "Shipped"
                    ? "green"
                    : "red"
                }
              >
                {status}
              </span>
            }
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
}

const ProductCard = ({ _id, name, photo, price, quantity }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} x ${quantity} = ${price * quantity}
    </span>
  </div>
);

export default TransactionManagement;
