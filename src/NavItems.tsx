import { AuthButtons } from "./AuthButtons";

export function NavItems() {
  return (
    <nav className="nav-section">
      <div className="nav-links">
        <a href="#reviews" className="nav-link">
          Reviews
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
      </div>
      <AuthButtons />
      <style jsx>{`
        .nav-section {
          align-self: stretch;
          display: flex;
          min-width: 240px;
          margin: auto 0;
          align-items: center;
          gap: -5px;
          color: #f8f8f8;
          font-weight: 400;
          line-height: 2;
          justify-content: flex-end;
          width: 416px;
        }
        .nav-links {
          align-self: stretch;
          display: flex;
          margin: auto 0;
          align-items: center;
          gap: 30px;
          white-space: nowrap;
          justify-content: start;
        }
        @media (max-width: 991px) {
          .nav-links {
            white-space: initial;
          }
        }
        .nav-link {
          align-self: stretch;
          margin: auto 0;
          padding: 14px 0;
          gap: 10px;
          text-decoration: none;
          color: inherit;
        }
        @media (max-width: 991px) {
          .nav-link {
            white-space: initial;
          }
        }
      `}</style>
    </nav>
  );
}

export default NavItems;