import { reload } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Review = ({ review }) => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [user] = useAuthState(auth);
  const handleReview = async (e) => {
    e.preventDefault();
    const addReview = {
      name: user.displayName,
      img: user.photoURL,
      review: e.target.review.value,
    };
    fetch("https://morning-waters-40331.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("successfully added review");
          navigate(from, { replace: true });
        }
      });
  };
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
              <img src={review.img} alt="img" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <p>{review.review}</p>
          </div>
        </div>
      </div>
      <input type="checkbox" id="addReview" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg">Add Your review</h3>
            <label htmlFor="addReview" className="btn">
              X
            </label>
          </div>
          <form onSubmit={handleReview}>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs mt-7"
              required
            />
            <input
              type="textarea"
              name="review"
              placeholder="review"
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

export default Review;
