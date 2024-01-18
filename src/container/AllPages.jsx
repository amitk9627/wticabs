import React from "react";
import { AddBus } from "../routes/AddBus";
import { AddDriver } from "../routes/AddDriver";
import { Routes, Route } from "react-router-dom";
import {Sidebar} from '../components/Sidebar'
import {Dashboard} from '../routes/Dashboard'
export const AllPages = () => {
  return (
    <div className="h-[100%-100px] w-screen  ">
      <div className="w-full h-full flex ">
        {/* sidebar */}
        <Sidebar />
        {/* routes page */}

        <div className="w-5/6">
          <div className=" overflow-y-scroll scrollbar-hide">
            <Routes>
              <Route path="/add_bus" element={<AddBus />} />
              <Route path="/add_driver" element={<AddDriver />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/re" element={<AddBus />} />
              <Route path="/tt" element={<AddBus />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
