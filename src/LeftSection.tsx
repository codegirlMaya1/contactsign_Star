import React from "react";

export const LeftSection: React.FC = () => {
  return (
    <>
      <section className="left-section">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/438c4c44103fff9cd412685b2e16269d2a180ead"
          alt="Background"
          className="background-image"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d80d3cc3c48f59ae68f415a81f762c8ff0c0508"
          alt="Star Gigs Logo"
          className="logo"
        />
        <h1 className="headline">Discover &amp; Get Discovered!</h1>
        <p className="copyright">STAR GIGS © 2025 ALL RIGHTS RESERVED</p>
      </section>
      <style jsx>{`
        .left-section {
          position: relative;
          width: 860px;
          height: 100%;
        }
        .background-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
        }
        .logo {
          position: absolute;
          top: 66px;
          left: 63px;
          width: 183px;
          height: 42px;
        }
        .headline {
          position: absolute;
          left: 63px;
          bottom: 288px;
          font-family: "Inter", sans-serif;
          font-size: 40px;
          font-weight: 700;
          line-height: 155%;
          color: #f8f8f8;
          max-width: 314px;
        }
        .copyright {
          position: absolute;
          left: 63px;
          bottom: 44px;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
          color: #f8f8f8;
        }
        @media (max-width: 991px) {
          .left-section {
            width: 100%;
            height: 300px;
          }
        }
        @media (max-width: 640px) {
          .logo {
            left: 20px;
          }
          .headline {
            font-size: 32px;
            left: 20px;
          }
          .copyright {
            left: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default LeftSection;