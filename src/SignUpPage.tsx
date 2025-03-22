"use client";
import * as React from "react";
import { LeftSection } from "./LeftSection";
import { SignUpForm } from "./SignUpForm";

export const SignUpPage: React.FC = () => {
  return (
    <>
      <div className="signup-container">
        <LeftSection />
        <SignUpForm />
      </div>
      <style jsx>{`
        .signup-container {
          max-width: none;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        @media (max-width: 991px) {
          .signup-container {
            max-width: 991px;
            flex-direction: column;
          }
        }
        @media (max-width: 640px) {
          .signup-container {
            max-width: 640px;
          }
        }
      `}</style>
    </>
  );
};

export default SignUpPage;