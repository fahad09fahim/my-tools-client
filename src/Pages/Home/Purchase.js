import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Purchase = ({ selectTools, setSelectTools }) => {
  const { _id, name, price, minOrder, available } = selectTools;

  const [user] = useAuthState(auth);

  const handleOrder = (e) => {
    e.preventDefault();
    const order = {
      orderID: _id,
      productName: name,
      buyerName: user.displayName,
      buyerEmail: user.email,
      phone: e.target.phone.value,
      quantity: e.target.quantity.value,
      availableProduct: available - e.target.quantity.value,
      price: price * e.target.quantity.value,
      address: e.target.address.value,
    };
    fetch("https://morning-waters-40331.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("order placed");
        } else {
          alert("order cannot placed");
        }
        setSelectTools(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg"> Make Your Order</h3>
            <label htmlFor="purchase-modal" className="btn">
              X
            </label>
          </div>

          <form onSubmit={handleOrder}>
            <input
              type="text"
              name="userName"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs mt-7"
              required
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs mt-7"
              required
            />
            <input
              type="text"
              name="price"
              disabled
              value={price || ""}
              className="input input-bordered w-full max-w-xs mt-7"
              required
            />
            <input
              type="text"
              name="name"
              disabled
              value={name || ""}
              className="input input-bordered w-full max-w-xs mt-7"
              required
            />
            <input
              type="text"
              name="minOrder"
              disabled
              value={minOrder || ""}
              className="input input-bordered w-full max-w-xs mt-7 "
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="ammount you want to buy"
              className="input input-bordered w-full max-w-xs mt-7"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs mt-7"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full max-w-xs mt-7"
            />
            <input
              type="submit"
              value="Submit"
              placeholder="Type here"
              className="btn btn-sm btn-secondary w-full max-w-xs mt-7"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
