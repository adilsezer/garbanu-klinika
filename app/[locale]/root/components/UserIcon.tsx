// components/UserIcon.tsx
import Link from "next/link";
import Image from "next/image";

const UserIcon: React.FC = () => {
  return (
    <Link href="/profile">
      <Image
        src="/icons/user-profile.svg"
        width={24}
        height={24}
        alt="Heart Icon"
      />
    </Link>
  );
};

export default UserIcon;
