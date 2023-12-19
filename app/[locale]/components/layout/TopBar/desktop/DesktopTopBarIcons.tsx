import IconLink from "@components/common/IconLink";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import LanguageSwitcher from "../LanguageSwitcher";

export default function DesktopTopBarIcons() {
  return (
    <div className="hidden md:flex justify-center md:space-x-4">
      <LanguageSwitcher />
      <IconLink href="/profile" icon={<FaRegUser size="25" />} />
      <IconLink href="/favorites" icon={<FaRegHeart size="25" />} />
      <IconLink href="/cart" icon={<IoCartOutline size="30" />} />
    </div>
  );
}
