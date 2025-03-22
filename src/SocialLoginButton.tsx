import React from "react";

interface SocialLoginButtonProps {
  icon: React.ReactNode;
  provider: string;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  icon,
  provider,
}) => {
  return (
    <>
      <button className="social-button" aria-label={`Sign in with ${provider}`}>
        {icon}
      </button>
      <style jsx>{`
        .social-button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 52px;
          height: 52px;
          border: 1px solid #d8dadc;
          border-radius: 12px;
          padding: 12px 9px;
          background: none;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .social-button:hover {
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  );
};
export default SocialLoginButton;