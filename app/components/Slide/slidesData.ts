import { SlideType } from "./SlideType";

export interface Slide {
  title: string;
  type: SlideType;
  subtitle?: string;
  image?: string;
  contents?: Content[];
  buttons?: { label: string; action: string }[];
}

interface Content {
  contentName: string;
  contentDesc?: string;
  contentPrice?: string;
  contentImage?: string;
}

const slidesData: Slide[] = [
  {
    title: "Garbanų Klinika",
    type: SlideType.Main,
    subtitle: "Say Hello to Curls",
    image: "./bg-images/bg-image-main.png",
    buttons: [
      { label: "Learn More →", action: "/learn-more" },
      { label: "Contact Us →", action: "/contact" },
    ],
  },
  {
    title: "Foundations",
    type: SlideType.Product,
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
    title: "Hair Care",
    type: SlideType.Product,
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
    title: "Why Us?",
    type: SlideType.TextCard,
    subtitle: "Garbanos Prasideda nuo..",
    image: "./bg-images/bg-image-face3.png",
    contents: [
      {
        contentName: "Organic all natural ingredients",
      },
      {
        contentName: "Professionally trained skin care experts",
      },
      {
        contentName: "Hypoallergenic dermotologist approved products",
      },
    ],
  },
  {
    /* Write FAQ data */
    title: "D.U.K",
    type: SlideType.TextCard,
    contents: [
      {
        contentName: "Kas yra garbanos 1?",
        contentDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      },
      {
        contentName: "Kas yra garbanos 2?",
        contentDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      },
      {
        contentName: "Kas yra garbanos 3?",
        contentDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      },
      {
        contentName: "Kas yra garbanos 4?",
        contentDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      },
    ],
  },
  {
    title: "Chat",
    type: SlideType.Main,
    subtitle: "Say Hello to Curls",
    image: "./bg-images/bg-image-main.png",
    buttons: [
      { label: "Learn More →", action: "/learn-more" },
      { label: "Contact Us →", action: "/contact" },
    ],
  },
];

export default slidesData;
