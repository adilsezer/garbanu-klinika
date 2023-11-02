import Link from "next/link";
import Image from "next/image";
import React from "react";

type LogoProps = {
  color?: "black" | "white"; // The color prop is now optional
};

const Logo: React.FC<LogoProps> = ({ color = "black" }) => {
  // Default value is 'black'
  const logoSrc =
    color === "black"
      ? "/web-ui/garbanu-klinika-black-logo.png"
      : "/web-ui/garbanu-klinika-white-logo.png";

  return (
    <Link href="/" passHref>
      <Image src={logoSrc} alt="logo" height={175} width={175} />
    </Link>
  );
};

export default Logo;
