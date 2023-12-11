import Link from "next/link";
import React, { ReactNode } from "react";

interface IconLinkProps {
  href: string;
  icon: ReactNode;
}

export default function IconLink({ href, icon }: IconLinkProps) {
  return (
    <div className="flex justify-center items-center w-4 h-4 md:w-8 md:h-8 cursor-pointer">
      <Link href={href}>{icon}</Link>
    </div>
  );
}
