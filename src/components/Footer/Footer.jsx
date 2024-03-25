import "./Footer.scss";
import logoFooter from "../../assets/logoFooter.png";
function Footer() {
  return (
    <footer className="Footer">
      <img src={logoFooter} alt="LogoFooter" className="logoFooter" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;