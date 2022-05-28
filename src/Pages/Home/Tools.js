import React, { useEffect, useState } from "react";
import Tool from "./Tool";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Purchase from "./Purchase";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const [selectTools, setSelectTools] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    fetch("https://morning-waters-40331.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        <DayPicker mode="single" selected={date} onSelect={setDate} />
      </div>
      <h1 className="text-3xl text-center text-bold mb-5 mt-5 text-secondary">
        Available Tools
      </h1>
      <div className="flex flex-col">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool} setSelectTools={setSelectTools} />
        ))}
      </div>
      {selectTools && (
        <Purchase
          setSelectTools={setSelectTools}
          selectTools={selectTools}
        ></Purchase>
      )}
    </div>
  );
};

export default Tools;
