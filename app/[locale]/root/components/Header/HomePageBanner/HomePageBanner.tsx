import Image from "next/image";
import Button from "../../../../components/Button";

export default function HomePageBanner() {
  return (
    <div className="flex relative w-full">
      <Image
        src="/headers/banner-curly-hair-women.jpg"
        alt="Curly hair women banner"
        width={0}
        height={0}
        sizes="100vw"
        quality={100}
        className="w-full h-auto"
        priority
      />
      <div className="absolute top-32 left-24 flex flex-col space-y-24">
        <Button text="PARDUOTUVĖ" />
        <Button text="UŽSIRAŠYMAI VIZITUI" />
      </div>
    </div>
  );
}
