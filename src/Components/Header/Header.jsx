import Logo from "./Logo";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <header className="  w-full flex justify-around items-center">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
