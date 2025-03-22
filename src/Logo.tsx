import React from "react";

export const Logo: React.FC = () => {
  return (
    <div className="logo-wrapper">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d80d3cc3c48f59ae68f415a81f762c8ff0c0508"
        alt="Star Gigs Logo"
        className="logo-image"
      />
      <style jsx>{`
        .logo-wrapper {
          display: flex;
          align-items: center;
          width: 183px;
        }
        .logo-image {
          width: 183px;
          height: 42px;
        }
        @media (max-width: 640px) {
          .logo-wrapper {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;