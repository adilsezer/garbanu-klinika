// components/HeartIcon.tsx
import Link from "next/link";
import Image from "next/image";

export default function HeartIcon() {
  return (
    <Link href="/favorites">
      <div className="relative w-4 h-4 md:w-8 md:h-8 cursor-pointer">
        <Image src="/icons/heart-icon.svg" alt="Favorites" fill />
      </div>
    </Link>
  );
}
