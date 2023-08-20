export interface Slide {
  title: string;
  content?: string;
  image?: string;
  contents?: Content[];
  buttons?: { label: string; action: string }[];
}

interface Content {
  contentName: string;
  contentDesc: string;
  contentPrice?: string;
  contentImage?: string;
}

const slidesData: Slide[] = [
  {
    title: "Garbanų",
    content: "Say Hello to Curls",
    image: "./bg-images/bg-image-main.png",
    buttons: [
      { label: "Learn More →", action: "/learn-more" },
      { label: "Contact Us →", action: "/contact" },
    ],
  },
  {
    title: "Foundations",
    contents: [
      {
        contentName: "Service 1",
        contentDesc: "Product A",
        contentPrice: "$100",
        contentImage: "./bg-images/bg-image-product1.jpeg",
      },
      {
        contentName: "Service 2",
        contentDesc: "Product B",
        contentPrice: "$200",
        contentImage: "./bg-images/bg-image-product2.jpeg",
      },
      {
        contentName: "Service 3",
        contentDesc: "Product C",
        contentPrice: "$300",
        contentImage: "./bg-images/bg-image-product3.jpeg",
      },
      {
        contentName: "Service 4",
        contentDesc: "Product D",
        contentPrice: "$300",
        contentImage: "./bg-images/bg-image-product3.jpeg",
      },
      {
        contentName: "Service 5",
        contentDesc: "Product E",
        contentPrice: "$300",
        contentImage: "./bg-images/bg-image-product3.jpeg",
      },
      {
        contentName: "Service 6",
        contentDesc: "Product F",
        contentPrice: "$300",
        contentImage: "./bg-images/bg-image-product3.jpeg",
      },
      {
        contentName: "Service 7",
        contentDesc: "Product G",
        contentPrice: "$300",
        contentImage: "./bg-images/bg-image-product3.jpeg",
      },
    ],
    buttons: [{ label: "View More →", action: "/products" }],
  },
  {
    title: "Care",
    contents: [
      {
        contentName: "Service 1",
        contentDesc: "Product A",
        contentPrice: "$100",
        contentImage: "./bg-images/bg-image-product1.jpeg",
      },
      {
        contentName: "Service 2",
        contentDesc: "Product B",
        contentPrice: "$200",
        contentImage: "./bg-images/bg-image-product2.jpeg",
      },
      {
        contentName: "Service 3",
        contentDesc: "Product C",
        contentPrice: "$300",
        contentImage: "./bg-images/bg-image-product3.jpeg",
      },
      {
        contentName: "Service 4",
        contentDesc: "Product D",
        contentPrice: "$300",
        contentImage: "./bg-images/bg-image-product3.jpeg",
      },
      {
        contentName: "Service 5",
        contentDesc: "Product E",
        contentPrice: "$300",
        contentImage: "./bg-images/bg-image-product3.jpeg",
      },
      {
        contentName: "Service 6",
        contentDesc: "Product F",
        contentPrice: "$300",
        contentImage: "./bg-images/bg-image-product3.jpeg",
      },
      {
        contentName: "Service 7",
        contentDesc: "Product G",
        contentPrice: "$300",
        contentImage: "./bg-images/bg-image-product3.jpeg",
      },
    ],
    buttons: [{ label: "View More →", action: "/products" }],
  },
  {
    title: "Garbanos",
    content: "Garbanos Prasideda nuo..",
    image: "./bg-images/bg-image-face3.png",
  },
  {
    title: "D.U.K",
    contents: [
      {
        contentName: "How Service 1",
        contentDesc: "Product A",
      },
      {
        contentName: "Service 2",
        contentDesc: "Product B",
      },
      {
        contentName: "Service 3",
        contentDesc: "Product C",
      },
      {
        contentName: "Service 4",
        contentDesc: "Product D",
      },
      {
        contentName: "Service 5",
        contentDesc: "Product E",
      },
      {
        contentName: "Service 6",
        contentDesc: "Product F",
      },
      {
        contentName: "Service 7",
        contentDesc: "Product G",
      },
    ],
  },
  {
    title: "Chat",
    content: "Say Hello to Curls",
    image: "./bg-images/bg-image-main.png",
    buttons: [
      { label: "Learn More →", action: "/learn-more" },
      { label: "Contact Us →", action: "/contact" },
    ],
  },
];

export default slidesData;
