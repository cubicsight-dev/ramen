import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-4 border-red-700 bg-black py-3">
      <div className="custom-container bg">
        <h5 className="mb-4 text-center">Your Logo</h5>
        <p className="text-center text-xs">
          Your Company © {new Date().getFullYear()}, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
