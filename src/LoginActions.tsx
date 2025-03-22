import React from "react";

export const LoginActions: React.FC = () => {
  return (
    <div className="login-actions">
      <button className="forgot-password">Forgot Password?</button>
      <button className="login-button">Log in</button>

      <style jsx>{`
        .login-actions {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .forgot-password {
          color: #f45e00;
          text-align: right;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          line-height: 26px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          align-self: flex-end;
        }
        .login-button {
          color: #fff;
          text-align: center;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          line-height: 26px;
          height: 56px;
          padding: 17px 152px;
          border-radius: 10px;
          cursor: pointer;
          background-color: #000;
          border: none;
          width: 100%;
        }
        @media (max-width: 640px) {
          .login-button {
            padding: 17px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginActions;