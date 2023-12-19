import Image from "next/image";

type Profile = {
  src: string;
  alt: string;
};

const profiles: Profile[] = [
  {
    src: "/profiles/profile-woman-with-long-blonde-curly-hair.jpg",
    alt: "Woman with long blonde hair",
  },
  {
    src: "/profiles/profile-woman-with-curly-red-hair.jpg",
    alt: "Woman with curly red hair",
  },
  {
    src: "/profiles/profile-woman-with-short-afro-hair.jpg",
    alt: "Woman with short afro hair",
  },
];

export default function CurlyProfileCarousel() {
  return (
    <div className="carousel w-full h-60 md:h-[40rem] mt-12">
      {profiles.map((profile, index) => (
        <div key={index} className="carousel-item w-1/3 h-full relative">
          <Image
            src={profile.src}
            alt={profile.alt}
            fill
            quality={75}
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
