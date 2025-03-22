import React from "react";

export const LoginHeader: React.FC = () => {
  return (
    <header className="login-header">
      <h1 className="title">Welcome Back 👋</h1>
      <p className="subtitle">Connect, collaborate, and find opportunities.</p>

      <style jsx>{`
        .login-header {
          display: flex;
          flex-direction: column;
          gap: 19px;
        }
        .title {
          color: #010113;
          font-family: "Inter", sans-serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 145%;
          margin: 0;
        }
        .subtitle {
          color: #505156;
          font-family: "Inter", sans-serif;
          font-size: 20px;
          line-height: 155%;
          margin: 0;
        }
      `}</style>
    </header>
  );
};

export default LoginHeader;