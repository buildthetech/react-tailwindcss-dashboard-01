import React from "react";
import Products from "./Products";

export default function TopProducts() {
  const data = [
    {
      id: 1,
      name: "Blue Jacket",
      type: "Cloths",
      sale: 5930,
      img: "	https://emilus.themenate.net/img/thumbs/thumb-7.jpg",
      saleincrease: true,
    },
    {
      id: 2,
      name: "White Sneaker",
      type: "Cloths",
      sale: 5117,
      img: "https://emilus.themenate.net/img/thumbs/thumb-12.jpg",
      saleincrease: true,
    },
    {
      id: 3,
      name: "Red Beat Headphone",
      type: "Device",
      sale: 4701,
      img: "https://emilus.themenate.net/img/thumbs/thumb-14.jpg",
      saleincrease: false,
    },
    {
      id: 4,
      name: "Blue Jacket",
      type: "Watches",
      sale: 2833,
      img: "https://emilus.themenate.net/img/thumbs/thumb-17.jpg",
      saleincrease: true,
    },
    {
      id: 5,
      name: "Iphones",
      type: "Device",
      sale: 6692,
      img: "https://images-eu.ssl-images-amazon.com/images/I/31348z5DSJL._SY445_SX342_QL70_FMwebp_.jpg",
      saleincrease: true,
    },
    {
      id: 6,
      name: "Monitors",
      type: "Device",
      sale: 1492,
      img: "https://m.media-amazon.com/images/I/71nkTsBEpkL._AC_UY327_FMwebp_QL65_.jpg",
      saleincrease: false,
    },
    {
      id: 7,
      name: "Laptops",
      type: "Device",
      sale: 10400,
      img: "https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg",
      saleincrease: true,
    },
  ];
  return (
    <div className="gap-4 flex flex-col w-full">
      <p className="font-medium text-lg">Top Products</p>
      <div className="flex flex-col w-full h-full gap-5 justify-between">
        {data.map((items) => (
          <Products
            key={items.id}
            name={items.name}
            img={items.img}
            type={items.type}
            sale={items.sale}
            saleincrease={items.saleincrease}
          />
        ))}
      </div>
    </div>
  );
}
