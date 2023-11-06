// components/CartIcon.tsx
import Link from "next/link";
import Image from "next/image";

const CartIcon: React.FC = () => {
  return (
    <Link href="/cart">
      <div className="relative w-7 h-7">
        <Image src="/icons/shopping-cart.svg" alt="Heart Icon" fill />
      </div>
    </Link>
  );
};

export default CartIcon;
