import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © {year} - All right reserved by My Tools </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
