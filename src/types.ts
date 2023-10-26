export type OrderItemType = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  photo: string;
};

export type OrderType = {
  _id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  pinCode: number;
  status: "Processing" | "Shipped" | "Delivered";
  subtotal: number;
  discount: number;
  shippingCharges: number;
  tax: number;
  total: number;
  orderItems: OrderItemType[];
};
