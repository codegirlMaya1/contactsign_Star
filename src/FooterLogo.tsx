"use client";
import * as React from "react";

export const FooterLogo: React.FC = () => {
  return (
    <div className="logo-container">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/69f6c0eb8f4785cd981ca454ec1050b92fac7f1f?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
        className="logo"
        alt="Star Gigs Logo"
      />
      <style jsx>{`
        .logo-container {
          line-height: 26px;
        }
        .logo {
          aspect-ratio: 4.37;
          object-fit: contain;
          object-position: center;
          width: 271px;
        }
      `}</style>
    </div>
  );
};

export default FooterLogo;