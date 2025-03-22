"use client";
import * as React from "react";

export const FooterCopyright: React.FC = () => {
  return (
    <p className="copyright">
      © 2025 STAR GIGS. All rights reserved.
      <style jsx>{`
        .copyright {
          position: relative;
          font-size: 12px;
          line-height: 25px;
          opacity: 0.65;
          align-self: center;
          margin-top: 29px;
          margin-left: 12px;
        }
      `}</style>
    </p>
  );
};

export default FooterCopyright;