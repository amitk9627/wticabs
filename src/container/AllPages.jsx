import React from "react";
import { AddBus } from "../routes/AddBus";
import { AddDriver } from "../routes/AddDriver";
import {AddConductor} from '../routes/AddConductor'
import {AddRoutes} from '../routes/AddRoutes'
import { Routes, Route } from "react-router-dom";
import {Sidebar} from '../components/Sidebar'
import {Dashboard} from '../routes/Dashboard'
export const AllPages = () => {
  return (
    <div className="h-[100%-100px] w-screen  ">
      <div className="w-full h-full flex max-md:flex-col ">
        {/* sidebar */}
        <Sidebar />
        {/* routes page */}

        <div className="w-5/6 bg-blue-50 flex justify-center p-8:" >
          <div className=" overflow-y-scroll scrollbar-hide  bg-white w-[700px]  h-full">
            <Routes>
              <Route path="/add_bus" element={<AddBus />} />
              <Route path="/add_driver" element={<AddDriver />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/add_conductor" element={<AddConductor />} />
              <Route path="/add_routes" element={<AddRoutes />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
