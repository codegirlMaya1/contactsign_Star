"use client";
import React from "react";
import { LoginHero } from "./LoginHero";
import { LoginForm } from "./LoginForm";

export const LoginPage: React.FC = () => {
  return (
    <main className="login-page">
      <LoginHero />
      <LoginForm />
      <style jsx>{`
        .login-page {
          max-width: none;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          width: 100%;
          min-height: 100vh;
          background-color: #fff;
        }
        @media (max-width: 991px) {
          .login-page {
            max-width: 991px;
          }
        }
        @media (max-width: 640px) {
          .login-page {
            max-width: 640px;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
};

export default LoginPage;
