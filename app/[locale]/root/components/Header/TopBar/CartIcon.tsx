// components/CartIcon.tsx
import Link from "next/link";
import Image from "next/image";

export default function CartIcon() {
  return (
    <Link href="/cart">
      <div className="relative w-4 h-4 md:w-8 md:h-8 cursor-pointer">
        <Image src="/icons/shopping-cart.svg" alt="Shopping Cart" fill />
      </div>
    </Link>
  );
}
