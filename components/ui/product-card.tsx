"use client";

import { ExpandIcon, ShoppingCart } from "lucide-react";

import Currency from "./currency";
import IconButton from "./icon-button";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { Product } from "@/types";
import useCard from "@/hooks/use-card";
import usePreviewModal from "@/hooks/use-preview-modal";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const previewModal = usePreviewModal();
  const card = useCard();

  const handleClick = () => {
    router.push(`/products/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    previewModal.onOpen(data);
  };
  const onAddToCard: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    card.addItem(data);
  };
  return (
    <div
      onClick={handleClick}
      className=" bg-white group cursor-pointer rounded-xl border p-3 space-y-4 m-4"
    >
      <div className="  aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="fail"
          className=" aspect-square object-cover  rounded-md group-hover:brightness-75 transition"
        />
        <div className=" opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="  flex gap-x-6 justify-center">
            <IconButton
              icon={<ExpandIcon color="white" />}
              onClick={onPreview}
            />
            <IconButton
              icon={<ShoppingCart color="white" />}
              onClick={onAddToCard}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className=" text-gray-500 text-sm">{data.category.name}</p>
      </div>
      <div className=" flex  items-center justify-between">
        {" "}
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
