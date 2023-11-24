import React, { PropsWithChildren } from "react";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-64px-16px)] overflow-scroll">
        {children}
        <Footer />
      </div>
    </>
  );
};
export default Layout;
