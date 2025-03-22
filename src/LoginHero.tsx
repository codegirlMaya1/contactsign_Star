import React from "react";

export const LoginHero: React.FC = () => {
  return (
    <section className="hero-section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9acfd99d8645feb4fec222b65cc1e157e8d89cc"
        alt=""
        className="login-art"
      />
      <div className="logo-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d80d3cc3c48f59ae68f415a81f762c8ff0c0508"
          alt="Star Gigs Logo"
          className="logo"
        />
      </div>
      <footer className="copyright">
        STAR GIGS © 2025 ALL RIGHTS RESERVED
      </footer>

      <style jsx>{`
        .hero-section {
          position: relative;
          width: 860px;
          height: 1135px;
          background-color: #000;
        }
        .login-art {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
        }
        .logo-container {
          position: absolute;
          top: 66px;
          left: 63px;
        }
        .logo {
          width: 183px;
          height: 42px;
        }
        .copyright {
          position: absolute;
          bottom: 44px;
          left: 63px;
          color: #f8f8f8;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          line-height: 26px;
        }
        @media (max-width: 991px) {
          .hero-section {
            width: 40%;
          }
        }
        @media (max-width: 640px) {
          .hero-section {
            width: 100%;
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default LoginHero;