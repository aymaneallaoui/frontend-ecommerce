import { H2, H4 } from "./typography";

import Button from "./ui/button";
import Currency from "./ui/currency";
import { Product } from "@/types";
import React from "react";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-card";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const card = useCart();

  const onAddToCart = () => {
    card.addItem(data);
  };
  return (
    <div>
      {/* <h1 className="">{data.name}</h1> */}
      <H2>{data.name}</H2>
      <div className=" mt-3 flex items-end justify-between">
        <p className=" text-2xl text-gray-800">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className=" my-4" />
      <div className=" flex flex-col gap-y-6">
        <div className=" flex items-center gap-x-4">
          <H4>Size:</H4>
          <div>{data.size.value}</div>
        </div>
        <div className=" flex items-center gap-x-4">
          <H4>Color:</H4>
          <div
            className=" w-6 h-6 rounded-full border  border-gray-900"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className=" mt-10 flex items-center gap-x-3">
        <Button className=" flex items-center gap-x-2" onClick={onAddToCart}>
          Add to cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
