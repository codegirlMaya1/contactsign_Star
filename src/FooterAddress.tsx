"use client";
import * as React from "react";

export const FooterAddress: React.FC = () => {
  return (
    <address className="address">
      5123 Market St. #22B <br />
      Charlottesville, California 44635
      <style jsx>{`
        .address {
          margin-top: 21px;
          margin-right: 26px;
          font-style: normal;
        }
        @media (max-width: 991px) {
          .address {
            margin-right: 10px;
          }
        }
      `}</style>
    </address>
  );
};

export default FooterAddress;