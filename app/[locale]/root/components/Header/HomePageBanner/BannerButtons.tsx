import React from "react";
import Button from "../../../../components/Button";

type ButtonType = {
  id: string;
  text: string;
  size: "small" | "medium" | "large";
};

interface BannerButtonsProps {
  buttons: ButtonType[];
}

const BannerButtons: React.FC<BannerButtonsProps> = ({ buttons }) => {
  return (
    <div className="absolute bottom-4 md:bottom-auto md:top-24 left-2 md:left-16 flex flex-row justify-center md:justify-start md:flex-col space-x-4 md:space-x-0 space-y-0 md:space-y-10 w-full md:w-auto">
      {buttons.map(({ id, text, size }) => (
        <Button key={id} text={text} size={size} />
      ))}
    </div>
  );
};

export default BannerButtons;
