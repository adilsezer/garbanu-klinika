// logo component to display clickable image and navigate to root page without locale
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <img
        src="/web-ui/garbanu-klinika-logo.png"
        alt="logo"
        height={175}
        width={175}
      />
    </Link>
  );
};

export default Logo;
