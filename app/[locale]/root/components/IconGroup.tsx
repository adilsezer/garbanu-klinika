// components/IconGroup.tsx

import ProfileIcon from "./UserIcon";
import HeartIcon from "./HeartIcon";
import CartIcon from "./CartIcon";

const IconGroup: React.FC = () => {
  return (
    <div>
      <ProfileIcon />
      <HeartIcon />
      <CartIcon />
    </div>
  );
};

export default IconGroup;
