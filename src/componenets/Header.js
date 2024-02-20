import logo from "../assets/shared/logo.svg";

function Header() {
  return (
    <header className="bg-primary">
      <img src={logo} alt="Logo" />
    </header>
  );
}

export default Header;
