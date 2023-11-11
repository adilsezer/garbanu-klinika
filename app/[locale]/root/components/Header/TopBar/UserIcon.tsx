// components/UserIcon.tsx
import Link from "next/link";
import Image from "next/image";

export default function UserIcon() {
  return (
    <Link href="/profile">
      <div className="relative w-7 h-7">
        <Image src="/icons/user-profile.svg" alt="Heart Icon" fill />
      </div>
    </Link>
  );
}
