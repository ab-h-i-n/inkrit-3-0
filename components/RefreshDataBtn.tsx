"use client";
import { refreshData } from "@/app/actions/refreshData";
import React from "react";

const RefreshDataBtn = () => {
  return (
    <div
      onClick={async () => {
        await refreshData();
      }}
      className="bg-red-600 px-3 py-2 text-white rounded cursor-pointer hover:bg-red-500"
    >
      Refresh Data
    </div>
  );
};

export default RefreshDataBtn;
