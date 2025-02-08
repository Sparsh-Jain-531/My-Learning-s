import React, { useContext } from "react";
import Axios_06 from "../components/Axios_06";
import { DataContext } from "../Context/UserContext";

const Services = () => {
  const data = useContext(DataContext);
  console.log(data);
  return (
    <>
      <div className="text-center font-bold text-2xl m-10">Services Page</div>
      <div className="flex flex-col justify-center items-center">
        <div>{data.name}</div>
        <div>{data.age}</div>
        <div>{data.occupation}</div>
      </div>
      <Axios_06 />
    </>
  );
};

export default Services;
