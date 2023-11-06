// components/HeartIcon.tsx
import Link from "next/link";
import Image from "next/image";

const HeartIcon: React.FC = () => {
  return (
    <Link href="/favorites">
      <div className="relative w-7 h-7">
        <Image src="/icons/heart-icon.svg" alt="Heart Icon" fill />
      </div>
    </Link>
  );
};

export default HeartIcon;
