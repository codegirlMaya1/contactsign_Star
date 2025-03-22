"use client";
import * as React from "react";
import { FooterLogo } from "./FooterLogo";
import { FooterAddress } from "./FooterAddress";
import { FooterNavigation } from "./FooterNavigation";
import { FooterContact } from "./FooterContact";
import { FooterCopyright } from "./FooterCopyright";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9194d4fac68b95c4589e27009a8fbfd8664d4c5?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
          className="background-image"
          alt="Footer background"
        />
        <div className="content-wrapper">
          <div className="main-content">
            <FooterLogo />
            <FooterAddress />
          </div>
          <FooterNavigation />
        </div>
        <FooterContact />
        <FooterCopyright />
      </div>
      <style jsx>{`
        .footer {
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          color: #f8f8f8;
          font-weight: 400;
        }
        .footer-container {
          display: flex;
          flex-direction: column;
          fill: #010113;
          overflow: hidden;
          position: relative;
          min-height: 432px;
          width: 100%;
          padding-left: 80px;
          padding-right: 80px;
          padding-top: 104px;
          padding-bottom: 46px;
        }
        .background-image {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .content-wrapper {
          position: relative;
          align-self: end;
          display: flex;
          width: 100%;
          max-width: 1178px;
          align-items: start;
          gap: 20px;
          font-size: 16px;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .footer-container {
            max-width: 100%;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 100px;
          }
          .content-wrapper {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;