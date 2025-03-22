"use client";
import * as React from "react";

export const FooterNavigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-primary">
        <a href="/" className="nav-link">
          Home
        </a>
        <br />
        <a href="/about" className="nav-link">
          About
        </a>
        <br />
        <a href="/booking" className="nav-link">
          Booking
        </a>
        <br />
        <br />
      </div>
      <div className="nav-secondary">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fdfff51d28344eaf4ae216f1d362ab89e2af3e9?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
          className="nav-icon"
          alt="Navigation icon"
        />
        <div className="nav-links">
          <a href="/contact" className="nav-link">
            Contact
          </a>
          <br />
          <a href="/reviews" className="nav-link">
            Reviews
          </a>
          <br />
          <a href="/talent-acts" className="nav-link">
            Talent Acts
          </a>
          <br />
        </div>
      </div>
      <style jsx>{`
        .navigation {
          display: flex;
          margin-top: 7px;
          align-items: stretch;
          gap: 40px 67px;
          line-height: 32px;
        }
        .nav-primary {
          opacity: 0.75;
          align-self: end;
          margin-top: 76px;
        }
        @media (max-width: 991px) {
          .nav-primary {
            margin-top: 40px;
          }
        }
        .nav-secondary {
          display: flex;
          flex-direction: column;
        }
        .nav-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 52px;
          align-self: end;
        }
        .nav-links {
          opacity: 0.75;
          align-self: start;
          margin-top: 24px;
        }
        .nav-link {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

FooterNavigation;