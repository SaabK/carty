import React from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default layout;
