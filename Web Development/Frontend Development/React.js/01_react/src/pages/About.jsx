import React, { useContext } from "react";
import Map from "../components/Map";
import { DataContext } from "../Context/UserContext";

const About = () => {
  const data = useContext(DataContext);
  console.log(data);
  return (
    <>
      <div className="text-center font-bold text-2xl m-10">About Page</div>
      <div className="text-center font-bold text-2xl m-10">Contact Page</div>
      <div className="flex flex-col justify-center items-center">
        <div>{data.name}</div>
        <div>{data.age}</div>
        <div>{data.occupation}</div>
      </div>
      <Map />
    </>
  );
};

export default About;
