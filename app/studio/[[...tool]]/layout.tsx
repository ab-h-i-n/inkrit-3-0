import RefreshDataBtn from "@/components/RefreshDataBtn";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#13141B]">
      {" "}
      <RefreshDataBtn /> {children}
    </div>
  );
};

export default RootLayout;
