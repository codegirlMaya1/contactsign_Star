import React from "react";

export const SignUpPrompt: React.FC = () => {
  return (
    <div className="signup-prompt">
      <span className="text">Already have an account?</span>
      <button className="signup-link">Sign Up</button>

      <style jsx>{`
        .signup-prompt {
          margin-top: 53px;
          text-align: center;
          font-family: "Roboto", sans-serif;
          font-size: 18px;
          line-height: 160%;
          letter-spacing: 0.18px;
        }
        .text {
          color: #313957;
        }
        .signup-link {
          color: #f45e00;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          margin-left: 5px;
          font: inherit;
        }
      `}</style>
    </div>
  );
};

export default SignUpPrompt;