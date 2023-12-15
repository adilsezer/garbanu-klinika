import { useState, useEffect } from "react";

/**
 * Custom hook to determine the number of items to display based on window width.
 * @param breakpoint The width at which the number of items changes.
 * @param itemsLarge Number of items to show on larger screens.
 * @param itemsSmall Number of items to show on smaller screens.
 * @returns The number of items to display based on the current window width.
 */
const useResponsiveItems = (
  breakpoint = 768,
  itemsLarge = 4,
  itemsSmall = 2
) => {
  const [itemsPerView, setItemsPerView] = useState(
    typeof window !== "undefined" && window.innerWidth >= breakpoint
      ? itemsLarge
      : itemsSmall
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(
        window.innerWidth >= breakpoint ? itemsLarge : itemsSmall
      );
    };

    window.addEventListener("resize", handleResize);

    // Set initial value
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, itemsLarge, itemsSmall]);

  return itemsPerView;
};

export default useResponsiveItems;
