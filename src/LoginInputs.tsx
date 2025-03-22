"use client";
import React, { useState } from "react";

export const LoginInputs: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-inputs">
      <div className="input-group">
        <label className="label">Email</label>
        <input type="email" placeholder="Example@email.com" className="input" />
      </div>
      <div className="input-group">
        <label className="label">Password</label>
        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="At least 8 characters"
            className="input"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="toggle-password"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.47724 2.5L2.37805 3.58126L16.5227 17.5L17.6219 16.4184L3.47724 2.5Z"
                fill="black"
                fillOpacity="0.6"
              />
              <path
                d="M4.70032 5.86632L5.73492 6.88437C4.60236 7.83326 3.70051 9.0144 3.11773 10.0478L3.11595 10.0513C4.73901 12.7216 7.31431 15.2453 10.5647 14.8625C11.442 14.7591 12.2605 14.464 13.0083 14.0418L14.0557 15.072C12.598 15.9926 10.9271 16.4802 9.1166 16.2392C5.85204 15.8047 3.18268 13.17 1.5 10.0758C2.29005 8.51149 3.37079 7.01498 4.70032 5.86632ZM7.05345 4.35759C7.9663 3.95736 8.95405 3.72197 10.0089 3.7052C10.0674 3.70485 10.7627 3.73733 11.0779 3.78832C11.2756 3.82045 11.4726 3.86062 11.6667 3.91056C14.7634 4.70439 17.0576 7.28041 18.5 9.93431C17.8949 11.1368 17.1023 12.3102 16.1572 13.3157L15.1538 12.3284C15.8519 11.588 16.434 10.7638 16.8823 9.96434C16.8823 9.96434 16.4315 9.25119 16.0897 8.80346C15.87 8.51568 15.639 8.23629 15.3962 7.96702C15.2046 7.75468 14.4603 7.03349 14.2832 6.88332C13.0949 5.87785 11.6997 5.08891 10.0263 5.10218C9.37818 5.1123 8.75494 5.23803 8.16328 5.44967L7.05345 4.35759Z"
                fill="black"
                fillOpacity="0.6"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.51656 8.63802L8.31524 9.4236L11.3895 12.4486C10.9785 12.6756 10.5043 12.8048 9.99994 12.8048C8.42942 12.8048 7.15454 11.5504 7.15454 10.005C7.15454 9.50869 7.28622 9.04245 7.51656 8.63802ZM9.94741 7.20578C9.9648 7.20543 9.98255 7.20508 9.99994 7.20508C11.5705 7.20508 12.8453 8.45991 12.8453 10.005C12.8453 10.0224 12.8453 10.0395 12.845 10.0567L9.94741 7.20578Z"
                fill="black"
                fillOpacity="0.6"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .login-inputs {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .label {
          color: #000;
          font-family: "Lato", sans-serif;
          font-size: 14px;
          line-height: 20px;
        }
        .input {
          flex: 1;
          color: rgba(0, 0, 0, 0.5);
          font-family: "Inter", sans-serif;
          font-size: 16px;
          line-height: 26px;
          padding: 15px 16px;
          border-radius: 10px;
          border: 1px solid #d8dadc;
          background-color: #fff;
          width: 100%;
        }
        .password-input {
          display: flex;
          align-items: center;
          position: relative;
        }
        .toggle-password {
          position: absolute;
          right: 16px;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default LoginInputs;