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
    title: "Slide 2",
    content: "Slide 2 Content",
    image: "/bg-images/bg-image-product1.jpeg",
  },
];

export default slidesData;
