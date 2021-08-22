import React from "react";

function Footer() {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <footer className="footer page__cover">
      <p className="footer__text">&copy; {year} Mesto Russia</p>
    </footer>
  );
}

export default Footer;
