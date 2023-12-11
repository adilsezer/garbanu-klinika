import IconLink from "@components/common/IconLink";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import LanguageSwitcher from "./LanguageSwitcher";

export default function TopBarIcons() {
  return (
    <div className="hidden md:flex justify-center md:space-x-4">
      <LanguageSwitcher />
      <IconLink href="/cart" icon={<FaRegUser size="25" />} />
      <IconLink href="/cart" icon={<FaRegHeart size="25" />} />
      <IconLink href="/cart" icon={<IoCartOutline size="27" />} />
    </div>
  );
}
