import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "./Loading";

const stripePromise = loadStripe(
  "pk_test_51L2FnwE8o6LO6DQXIyWJFYeeeeqYhUgbLnXlxqhwYUQ5SvlXJLrXa2GqYnPPOFTix7fwsCPuweteyly53brgxFRf00u7LTryYZ"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://morning-waters-40331.herokuapp.com/order/${id}`;

  const { data: orders, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {orders.buyerName}</p>
          <h2 className="card-title">Please Pay for: {orders.productName}</h2>
          <p className="text-rose-500">Please pay: ${orders.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm orders={orders} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
