import React from "react";
import { SearchFilterProps } from "./types";

export const SearchFilter: React.FC<SearchFilterProps> = ({
  icon,
  title,
  subtitle,
}) => {
  return (
    <div className="filter-container">
      <div className="filter-content">
        <div dangerouslySetInnerHTML={{ __html: icon }} />
        <div className="filter-text">
          <div className="filter-title">{title}</div>
          <div className="filter-subtitle">{subtitle}</div>
        </div>
      </div>
      <style jsx>{`
        .filter-container {
          height: 40px;
          border-radius: 65px;
          border: 1px solid #d8dadc;
          box-shadow:
            -2px -2px 10px 0 rgba(206, 206, 206, 0.15),
            2px 2px 4px 0 rgba(206, 206, 206, 0.15);
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0 13px;
          background-color: #fff;
        }
        .filter-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .filter-text {
          display: flex;
          flex-direction: column;
          gap: -1px;
        }
        .filter-title {
          color: #525252;
          font-family: Inter, sans-serif;
          font-size: 14px;
          font-weight: 500;
        }
        .filter-subtitle {
          color: #525252;
          font-family: Inter, sans-serif;
          font-size: 10px;
        }
      `}</style>
    </div>
  );
};

export default SearchFilter;