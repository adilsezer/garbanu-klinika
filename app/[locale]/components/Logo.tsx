// logo component to display clickable image and navigate to root page without locale

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <div className="relative w-52 h-24">
        <Image
          src="/web-ui/logo-black-garbanu-klinika.png"
          alt="logo"
          fill
          className="object-contain"
          sizes="100%"
        />
      </div>
    </Link>
  );
}
