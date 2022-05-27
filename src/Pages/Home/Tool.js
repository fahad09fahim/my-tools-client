import React from "react";

const Tool = ({ tool, setSelectTools }) => {
  const { name, img, price, description, minOrder, available } = tool;

  return (
    <div>
      <div class="card card-side bg-info  shadow-xl w-1/2 mx-auto mb-5">
        <div className="flex flex-col  md:flex-row  justify-between ">
          <div className=" w-3/4 ">
            <img
              src={img}
              className="w-36 h-32 mx-auto mt-14 rounded-md outline outline-offset-2 outline-black "
              alt="Movie"
            />
          </div>
          <div class="card-body">
            <h2 class="card-title">{name}</h2>
            <p>{description}</p>
            <p>Min order: {minOrder}</p>
            <p>Available:{available} </p>
            <p>price:{price}</p>
            <label
              disabled={available === 0}
              class="btn btn-primary w-28 "
              onClick={() => setSelectTools(tool)}
              for="purchase-modal"
              className="btn btn-primary w-28"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
