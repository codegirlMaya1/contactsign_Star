"use client";
import * as React from "react";

export const FooterContact: React.FC = () => {
  return (
    <>
      <div className="contact-phone">
        <a href="tel:+1234567890" className="phone-link">
          (123) 456-7890
        </a>
        <div className="separator" />
      </div>
      <div className="contact-email">
        <a href="mailto:contact@stargigs.com" className="email-link">
          contact@stargigs.com
        </a>
        <div className="separator" />
      </div>
      <style jsx>{`
        .contact-phone {
          position: relative;
          margin-top: 9px;
          width: 106px;
          max-width: 100%;
          font-family:
            Poppins,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          line-height: 2;
        }
        .contact-email {
          position: relative;
          margin-top: 11px;
          width: 161px;
          max-width: 100%;
          font-family:
            Poppins,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          white-space: nowrap;
          line-height: 2;
        }
        .separator {
          border-color: rgba(244, 94, 0, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #f45e00;
          min-height: 1px;
          width: 100%;
        }
        .phone-link,
        .email-link {
          color: inherit;
          text-decoration: none;
        }
        @media (max-width: 991px) {
          .contact-phone {
            margin-left: 4px;
          }
          .contact-email {
            margin-left: 4px;
            white-space: initial;
          }
        }
      `}</style>
    </>
  );
};

export default FooterContact;