import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = ({ selectTools }) => {
  const { _id, name, price, minOrder, available } = selectTools;
  const [user] = useAuthState(auth);

  const handleOrder = (e) => {
    e.preventDefault();
    const totalQuantity = e.target.quantity.value;
    const order = {
      orderID: _id,
      productName: name,
      buyerName: user.displayName,
      buyerEmail: user.email,
      phone: e.target.phone.value,
      quantity: available - totalQuantity,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Order placed");
        } else {
          alert("Error");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="purchase-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <div className="flex justify-between">
            <h3 class="font-bold text-lg"> Make Your Order</h3>
            <label for="purchase-modal" className="btn">
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
              name="Address"
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
