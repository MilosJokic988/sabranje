import { useState } from "react";
import Navigation from "./Navigation";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="brand">
  <img src="/logo.PNG" alt="Сабрање" className="brand-logo" />
  <h1 className="logo">САБРАЊЕ</h1>
</div>
        

        {/* Desktop menu */}
        <nav className="desktop-nav">
          <Navigation />
        </nav>

        {/* Hamburger button */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="mobile-nav">
          <Navigation onClick={() => setOpen(false)} />
        </nav>
      )}
    </header>
  );
}
