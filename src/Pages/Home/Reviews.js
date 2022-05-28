import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://morning-waters-40331.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="flex justify-center my-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
        <label htmlFor="addReview" className="btn modal-button">
          Add Review
        </label>
      </div>
    </div>
  );
};

export default Reviews;
