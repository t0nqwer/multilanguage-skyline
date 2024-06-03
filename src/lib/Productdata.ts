export interface ProductTypes {
  name: string;
  FrontImg: string;
  DetailImage: string;
  id: string;
}
export interface ProductDataTypes {
  category: string;
  Product: ProductTypes[];
}

export const Productdata: ProductDataTypes[] = [
  {
    category: "Solar Energy Street Lamp",
    Product: [
      {
        name: "Solar Energy Street Lamp",
        FrontImg: "/product/st11.jpg",
        DetailImage: "/product/st12.jpg",
        id: "st1",
      },
      {
        name: "Solar Energy Street Lamp",
        FrontImg: "/product/st21.jpg",
        DetailImage: "/product/st22.jpg",
        id: "st2",
      },
      {
        name: "Solar Energy Street Lamp",
        FrontImg: "/product/st31.jpg",
        DetailImage: "/product/st32.jpg",
        id: "st3",
      },
      {
        name: "Solar Energy Street Lamp",
        FrontImg: "/product/st41.jpg",
        DetailImage: "/product/st42.jpg",
        id: "st4",
      },
      {
        name: "Solar Energy Street Lamp",
        FrontImg: "/product/st51.jpg",
        DetailImage: "/product/st52.jpg",
        id: "st5",
      },
      {
        name: "Solar Energy Street Lamp",
        FrontImg: "/product/st61.jpg",
        DetailImage: "/product/st62.jpg",
        id: "st6",
      },
    ],
  },
  {
    category: "Solar Energy Projection Lamp",
    Product: [
      {
        name: "Solar Energy Projection Lamp",
        FrontImg: "/product/sp11.jpg",
        DetailImage: "/product/sp12.jpg",
        id: "sp1",
      },
      {
        name: "Solar Energy Projection Lamp",
        FrontImg: "/product/sp21.jpg",
        DetailImage: "/product/sp22.jpg",
        id: "sp2",
      },
      {
        name: "Solar Energy Projection Lamp",
        FrontImg: "/product/sp31.jpg",
        DetailImage: "/product/sp32.jpg",
        id: "sp3",
      },
      {
        name: "Solar Energy Projection Lamp",
        FrontImg: "/product/sp41.jpg",
        DetailImage: "/product/sp42.jpg",
        id: "sp4",
      },
      {
        name: "Solar Energy Projection Lamp",
        FrontImg: "/product/sp51.jpg",
        DetailImage: "/product/sp52.jpg",
        id: "sp5",
      },
      {
        name: "Solar Energy Projection Lamp",
        FrontImg: "/product/sp61.jpg",
        DetailImage: "/product/sp62.jpg",
        id: "sp6",
      },
      {
        name: "Solar Energy Projection Lamp",
        FrontImg: "/product/sp71.jpg",
        DetailImage: "/product/sp72.jpg",
        id: "sp7",
      },
    ],
  },
  {
    category: "Solar Energy UFO Lamp",
    Product: [
      {
        name: "Solar Energy UFO Lamp",
        FrontImg: "/product/so11.jpg",
        DetailImage: "/product/so12.jpg",
        id: "so1",
      },
    ],
  },
  {
    category: "BANGCHAK JASMINE",
    Product: [
      {
        name: "BANGCHAK JASMINE",
        FrontImg: "/product/bj11.png",
        DetailImage: "/product/bj11.png",
        id: "bj1",
      },
    ],
  },
];
