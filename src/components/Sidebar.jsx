import React from "react";
import { NavLink } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div className="h-[100%-100px]  w-1/6 max-lg:w-2/6 max-md:w-screen max-md:overflow-x-scroll  overflow-y-scroll scrollbar-hide ">
      <div className="h-[485px]  flex flex-col gap-6 max-md:flex-row  max-md:h-24 max-lg:gap-4 max-md:gap-2 items-center py-8 max-lg:py-4">
        <div className="py-1">
          <p className=" p-[10px 40px]">
            <NavLink to="/">Dashboard</NavLink>
          </p> 
        </div>
       {/* <div className="h-[.1px] w-full border-[1px] -my-4  border-gray-500"></div> */}
        <div className="py-1">
          <p className=" ">
            <NavLink to="/add_bus">Add Bus</NavLink>
          </p>
        </div>
        <div className="py-1">
          <p className=" ">
            <NavLink to="/add_driver">Add Driver</NavLink>
          </p>
        </div>
        <div className="py-1">
          <p className=" ">
            <NavLink to="/add_conductor" className="active:-p-[10px 40px]">Add Conductor</NavLink>
          </p>
        </div>
        <div className="py-1">
          <p className=" "> <NavLink to="/add_routes">Add Route</NavLink></p>
        </div>
        <div className="py-1">
          <p>evbk hue</p>
        </div>
        <div className="py-1">
          <p>ADD bus</p>
        </div>
        <div className="py-1">
          <p>Add driver</p>
        </div>
        <div className="py-1">
          <p>Add Routes</p>
        </div>
        <div className="py-1">
          <p>Addjefv</p>
        </div>
        <div className="py-1 pb-8">
          <p>evbk hue</p>
        </div>
      </div>
    </div>
  );
};
