import Link from "next/link";
import Image from "next/image";

// Define the sizes as a constant
const LOGO_SIZES = "(max-width: 640px) 50vw, (max-width: 1024px) 208px, 240px";

export default function Logo() {
  return (
    <Link href="/">
      <div className="cursor-pointer relative w-36 h-16 sm:w-52 sm:h-24 lg:w-60 lg:h-30 md:mb-8">
        <Image
          src="/web-ui/logo-black-garbanu-klinika.png"
          alt="Garbanų Klinika Logo"
          fill
          className="object-contain"
          sizes={LOGO_SIZES}
        />
      </div>
    </Link>
  );
}
