// components/CartIcon.tsx
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function CartIcon() {
  return (
    <Link href="/cart">
      <div className="relative w-4 h-4 md:w-8 md:h-8 cursor-pointer">
        <IoCartOutline size="auto" />
      </div>
    </Link>
  );
}
