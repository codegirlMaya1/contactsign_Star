import React from "react";

export const NavigationMenu: React.FC = () => {
  return (
    <nav className="nav-menu">
      <a href="/reviews" className="nav-link">
        Reviews
      </a>
      <a href="/about" className="nav-link">
        About
      </a>
      <div className="auth-buttons">
        <button className="signup-button">Sign Up</button>
        <button className="login-button">Log In</button>
      </div>
      <style jsx>{`
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .nav-link {
          color: #f8f8f8;
          font-family: Inter, sans-serif;
          font-size: 16px;
          padding: 14px 0;
          text-decoration: none;
        }
        .auth-buttons {
          display: flex;
          gap: 13px;
        }
        .signup-button {
          height: 49px;
          padding: 16px 34px;
          font-family: Inter, sans-serif;
          font-size: 16px;
          color: #f8f8f8;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .login-button {
          height: 49px;
          padding: 16px 34px;
          font-family: Inter, sans-serif;
          font-size: 16px;
          color: #f8f8f8;
          border-radius: 7px;
          background-color: #f45e00;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 640px) {
          .nav-menu {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavigationMenu;