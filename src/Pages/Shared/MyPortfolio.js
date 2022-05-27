import React from "react";

const MyPortfolio = () => {
  return (
    <div className="flex flex-col mx-16  my-14">
      <h1 className="text-5xl">Name: MD. Fahad Al Fahim</h1>
      <h1 className="text-3xl">email: anik.fahim07@gmail.com</h1>
      <ul className="text-xl list-disc">
        Educational background:
        <li>
          Studying at political science in Soyed Ahmed college,Bogura,Bangladesh
        </li>
        <li>HSC from Rda lab school and college,Bogura,Bangladesh</li>
        <li>SSC from Rda lab school and college,Bogura,Bangladesh</li>
      </ul>
      <hr className="my-3" />
      <ul className=" text-2xl list-disc ">
        List of technologies i use for web development:
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Firebase</li>
        <li>Mongodb</li>
        <li>Bootstarp</li>
        <li>Tailwind</li>
      </ul>
      <hr />
      <h1 className="text-2xl">3 project i have done recently</h1>
      <ul>
        <li>
          <a target="_blank" href="https://watch-shop-db.netlify.app/">
            WatchShop
          </a>
        </li>
        <li>
          <a target="_blank" href="https://camera-jogot.netlify.app/">
            CameraJogot
          </a>
        </li>
        <li>
          <a target="_blank" href=" https://sports-flash.web.app/">
            Sport-Flash
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MyPortfolio;
