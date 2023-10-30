// components/HeartIcon.tsx
import Link from "next/link";
import Image from "next/image";

const HeartIcon: React.FC = () => {
  return (
    <Link href="/favorites">
      <Image
        src="/icons/heart-icon.svg"
        width={24}
        height={24}
        alt="Heart Icon"
      />
    </Link>
  );
};

export default HeartIcon;
