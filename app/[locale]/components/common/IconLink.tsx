// components/IconLink.tsx
import Link from "next/link";
import React, { ReactNode } from "react";

interface IconLinkProps {
  href: string;
  icon: ReactNode;
}

export default function IconLink({ href, icon }: IconLinkProps) {
  return (
    <Link href={href}>
      <div className="relative w-4 h-4 md:w-8 md:h-8 cursor-pointer">
        {icon}
      </div>
    </Link>
  );
}
