

export function AuthButtons() {
  return (
    <div className="auth-buttons">
      <button className="signup-button">Sign Up</button>
      <button className="login-button">Log In</button>
      <style jsx>{`
        .auth-buttons {
          align-self: stretch;
          display: flex;
          min-width: 240px;
          margin: auto 0;
          align-items: center;
          gap: 13px;
          justify-content: flex-end;
        }
        .signup-button {
          align-self: stretch;
          border-radius: 7px;
          background-color: rgba(159, 117, 254, 0);
          margin: auto 0;
          min-height: 49px;
          padding: 12px 34px;
          gap: 10px;
          border: none;
          color: #f8f8f8;
          cursor: pointer;
        }
        .login-button {
          align-self: stretch;
          border-radius: 7px;
          background-color: #f45e00;
          margin: auto 0;
          min-height: 49px;
          padding: 12px 34px;
          gap: 10px;
          border: none;
          color: #f8f8f8;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .signup-button,
          .login-button {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default AuthButtons;