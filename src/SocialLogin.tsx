import React from "react";

export const SocialLogin: React.FC = () => {
  return (
    <div className="social-login">
      <div className="divider">
        <div className="line" />
        <span className="text">Or Login with</span>
        <div className="line" />
      </div>
      <div className="social-buttons">
        <button className="social-button">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ff994ef3b8442083a3863fd2b4029266705473a"
            alt="Google"
            className="social-icon"
          />
        </button>
        <button className="social-button">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4034_257)">
              <path
                d="M28.5 14.5C28.5 6.76801 22.232 0.5 14.5 0.5C6.76801 0.5 0.5 6.76801 0.5 14.5C0.5 21.4877 5.61957 27.2796 12.3125 28.3299V18.5469H8.75781V14.5H12.3125V11.4156C12.3125 7.90687 14.4027 5.96875 17.6005 5.96875C19.1318 5.96875 20.7344 6.24219 20.7344 6.24219V9.6875H18.9691C17.23 9.6875 16.6875 10.7668 16.6875 11.875V14.5H20.5703L19.9496 18.5469H16.6875V28.3299C23.3804 27.2796 28.5 21.4877 28.5 14.5Z"
                fill="#1877F2"
              />
              <path
                d="M19.9496 18.5469L20.5703 14.5H16.6875V11.875C16.6875 10.7679 17.23 9.6875 18.9691 9.6875H20.7344V6.24219C20.7344 6.24219 19.1323 5.96875 17.6005 5.96875C14.4027 5.96875 12.3125 7.90688 12.3125 11.4156V14.5H8.75781V18.5469H12.3125V28.3299C13.762 28.5567 15.238 28.5567 16.6875 28.3299V18.5469H19.9496Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_4034_257">
                <rect
                  width="28"
                  height="28"
                  fill="white"
                  transform="translate(0.5 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <style jsx>{`
        .social-login {
          margin-top: 34px;
        }
        .divider {
          display: flex;
          padding: 10px 0;
          align-items: center;
          gap: 16px;
        }
        .line {
          flex: 1;
          height: 1px;
          background-color: #d8dadc;
        }
        .text {
          color: #294957;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          line-height: 26px;
        }
        .social-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 24px;
        }
        .social-button {
          display: flex;
          width: 52px;
          padding: 12px 9px;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          border: 1px solid #d8dadc;
          cursor: pointer;
          background: none;
        }
        .social-icon {
          width: 28px;
          height: 28px;
        }
        @media (max-width: 640px) {
          .social-buttons {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
};

export default SocialLogin;