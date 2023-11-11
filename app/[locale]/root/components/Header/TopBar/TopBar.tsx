import SearchBar from "./SearchBar";
import Logo from "../../../../components/Logo";
import UserIcon from "./UserIcon";
import HeartIcon from "./HeartIcon";
import CartIcon from "./CartIcon";
import LanguageSwitcher from "./LanguageSwitcher";

export default function TopBar() {
  return (
    <div className="container mx-auto flex items-center justify-between">
      {/* Left side */}
      <SearchBar />
      {/* Center */}
      <Logo />
      {/* Right side */}
      <div className="flex items-center space-x-8">
        <LanguageSwitcher />
        <UserIcon />
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  );
}
