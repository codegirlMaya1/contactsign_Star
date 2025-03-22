"use client";
import React from "react";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { NavigationMenu } from "./NavigationMenu";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
      <NavigationMenu />
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 120px;
          width: 100%;
          background-color: #010113;
        }
        @media (max-width: 991px) {
          .header {
            padding: 18px 60px;
          }
        }
        @media (max-width: 640px) {
          .header {
            padding: 18px 20px;
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;