const HamburgerIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div onClick={onClick} className="cursor-pointer flex flex-col gap-1">
    <div className="h-1 w-6 bg-primary"></div>
    <div className="h-1 w-6 bg-primary"></div>
    <div className="h-1 w-6 bg-primary"></div>
  </div>
);

export default HamburgerIcon;
