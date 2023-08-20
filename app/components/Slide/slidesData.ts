export interface Slide {
  title: string;
  content?: string;
  image?: string;
  contents?: Content[];
  buttons?: { label: string; action: string }[];
}

interface Content {
  serviceName: string;
  productName: string;
  price: string;
  image: string;
}

const slidesData: Slide[] = [
  {
    title: "Garbanų",
    content: "Say Hello to Curls",
    image: "/bg-images/bg-image-main.png",
    buttons: [
      { label: "Learn More →", action: "/learn-more" },
      { label: "Contact Us →", action: "/contact" },
    ],
  },
  {
    title: "Foundations",
    contents: [
      {
        serviceName: "Service 1",
        productName: "Product A",
        price: "$100",
        image: "/bg-images/bg-image-product1.jpeg",
      },
      {
        serviceName: "Service 2",
        productName: "Product B",
        price: "$200",
        image: "/bg-images/bg-image-product2.jpeg",
      },
      {
        serviceName: "Service 3",
        productName: "Product C",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
      {
        serviceName: "Service 4",
        productName: "Product D",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
      {
        serviceName: "Service 5",
        productName: "Product E",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
      {
        serviceName: "Service 6",
        productName: "Product F",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
      {
        serviceName: "Service 7",
        productName: "Product G",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
    ],
    buttons: [{ label: "View More →", action: "/products" }],
  },
  {
    title: "Care",
    contents: [
      {
        serviceName: "Service 1",
        productName: "Product A",
        price: "$100",
        image: "/bg-images/bg-image-product1.jpeg",
      },
      {
        serviceName: "Service 2",
        productName: "Product B",
        price: "$200",
        image: "/bg-images/bg-image-product2.jpeg",
      },
      {
        serviceName: "Service 3",
        productName: "Product C",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
      {
        serviceName: "Service 4",
        productName: "Product D",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
      {
        serviceName: "Service 5",
        productName: "Product E",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
      {
        serviceName: "Service 6",
        productName: "Product F",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
      {
        serviceName: "Service 7",
        productName: "Product G",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
    ],
    buttons: [{ label: "View More →", action: "/products" }],
  },
  {
    title: "Garbanos",
    content: "Garbanos Prasideda nuo..",
    image: "/bg-images/bg-image-face3.png",
  },
  {
    title: "D.U.K",
    contents: [
      {
        serviceName: "Service 1",
        productName: "Product A",
        price: "$100",
        image: "/bg-images/bg-image-product1.jpeg",
      },
      {
        serviceName: "Service 2",
        productName: "Product B",
        price: "$200",
        image: "/bg-images/bg-image-product2.jpeg",
      },
      {
        serviceName: "Service 3",
        productName: "Product C",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
      {
        serviceName: "Service 4",
        productName: "Product D",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
      {
        serviceName: "Service 5",
        productName: "Product E",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
      {
        serviceName: "Service 6",
        productName: "Product F",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
      {
        serviceName: "Service 7",
        productName: "Product G",
        price: "$300",
        image: "/bg-images/bg-image-product3.jpeg",
      },
    ],
  },
  {
    title: "Chat",
    content: "Say Hello to Curls",
    image: "/bg-images/bg-image-main.png",
    buttons: [
      { label: "Learn More →", action: "/learn-more" },
      { label: "Contact Us →", action: "/contact" },
    ],
  },
];

export default slidesData;
