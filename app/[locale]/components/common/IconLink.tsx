import Link from "next/link";
import React, { ReactNode, useMemo } from "react";

interface IconLinkProps {
  href: string;
  icon: ReactNode;
}

export default function IconLink({ href, icon }: IconLinkProps) {
  const isExternal = useMemo(
    () => href.startsWith("http://") || href.startsWith("https://"),
    [href]
  );

  return (
    <div className="flex justify-center items-center w-4 h-4 md:w-8 md:h-8 cursor-pointer">
      <Link
        href={href}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
      >
        {icon}
      </Link>
    </div>
  );
}
