import Image from "next/image";
import Link from "next/link";

export default function UserIcon() {
  return (
    <Link href="/profile">
      <div className="relative w-4 h-4 md:w-8 md:h-8 cursor-pointer">
        <Image src="/icons/user-profile.svg" alt="User Profile" fill />
      </div>
    </Link>
  );
}
