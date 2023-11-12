"use client";

import React, { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import { ShoppingBasketIcon } from "lucide-react";
import useCard from "@/hooks/use-card";
import { useRouter } from "next/navigation";

const NavBarActions = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const card = useCard();
  const router = useRouter();

  if (!mounted) {
    return null;
  }

  return (
    <div className=" ml-auto flex items-center gap-x-4">
      <Button
        className=" flex items-center  rounded-full bg-black px-4 py-2 shadow-xl"
        onClick={() => router.push("/cart")}
      >
        {" "}
        <ShoppingBasketIcon size={20} color="white" />
        <span className=" ml-2 text-sm font-medium text-white">
          {card.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavBarActions;
