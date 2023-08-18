// slidesData.ts
export interface Slide {
  title: string;
  content: string;
  image: string;
}

const slidesData: Slide[] = [
  {
    title: "Garbanų Klinika",
    content: "Say Hello to Curls",
    image: "/bg-images/bg-image-main.png",
  },
  {
    title: "The Foundations",
    content: "Innersense Gelis",
    image: "/bg-images/bg-image-product1.jpeg",
  },
];

export default slidesData;
