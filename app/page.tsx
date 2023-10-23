import PromotionalBanner from "./(routes)/root/components/PromotionalBanner";
import { promoBannerDocPath } from "@lib/firebase/firebaseConfig";

export default function Home() {
  return (
    <div>
      <PromotionalBanner docPath={promoBannerDocPath} lang= />
    </div>
  );
}
