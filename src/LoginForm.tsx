import React from "react";
import { LoginHeader } from "./LoginHeader";
import { LoginInputs } from "./LoginInputs";
import { LoginActions } from "./LoginActions";
import { SocialLogin } from "./SocialLogin";
import { SignUpPrompt } from "./SignUpPrompt";

export const LoginForm: React.FC = () => {
  return (
    <section className="login-form-section">
      <div className="login-form-container">
        <LoginHeader />
        <form className="login-form">
          <LoginInputs />
          <LoginActions />
        </form>
        <SocialLogin />
        <SignUpPrompt />
      </div>

      <style jsx>{`
        .login-form-section {
          flex: 1;
          padding: 173px 140px 0 0;
          display: flex;
          justify-content: flex-end;
        }
        .login-form-container {
          width: 388px;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .login-form-section {
            padding: 100px 40px 0 0;
          }
        }
        @media (max-width: 640px) {
          .login-form-section {
            padding: 40px 20px;
          }
          .login-form-container {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default LoginForm;