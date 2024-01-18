import React from "react";
import { NavLink } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div className="h-[100%-100px]  w-1/6 overflow-y-scroll scrollbar-hide bg-blue-100">
      <div className="h-[485px]  flex flex-col gap-6 items-center py-8 ">
        <div className="py-1 ">
          <p className=" p-[10px 40px]">
            <NavLink to="/">Dashboard</NavLink>
          </p> 
        </div>
       {/* <div className="h-[.1px] w-full border-[1px] -my-4  border-gray-500"></div> */}
        <div className="py-1">
          <p>
            <NavLink to="/add_bus">Add bus</NavLink>
          </p>
        </div>
        <div className="py-1">
          <p>
            <NavLink to="/add_driver">Add driver</NavLink>
          </p>
        </div>
        <div className="py-1">
          <p>
            <NavLink to="/add_routes">Add Routes</NavLink>
          </p>
        </div>
        <div className="py-1">
          <p>Add</p>
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
