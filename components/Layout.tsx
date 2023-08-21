import React from "react";
import { Footer, Navbar } from ".";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
