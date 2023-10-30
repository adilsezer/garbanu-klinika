// components/CartIcon.tsx
import Link from "next/link";
import Image from "next/image";

const CartIcon: React.FC = () => {
  return (
    <Link href="/cart">
      <Image
        src="/icons/shopping-cart.svg"
        width={30}
        height={30}
        alt="Heart Icon"
      />
    </Link>
  );
};

export default CartIcon;
