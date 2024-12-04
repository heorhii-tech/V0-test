import React from "react";
import { Header } from "../header/ui/index";
import { SideBar } from "../side-bar/ui/index";

interface LayoutProps {
  children: React.ReactNode;
  currentStep: number;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentStep }) => {
  return (
    <div className="flex h-screen max-w-full">
      <SideBar />
      <div className="flex flex-col flex-1 ">
        <Header currentStep={currentStep} />
        <main className="flex-1 p-6 bg-gray-50 ">{children}</main>
      </div>
    </div>
  );
};
