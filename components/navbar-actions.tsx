"use client";

import React, { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import { ShoppingBasketIcon } from "lucide-react";

const NavBarActions = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className=" ml-auto flex items-center gap-x-4">
      <Button className=" flex items-center  rounded-full bg-black px-4 py-2 shadow-xl">
        {" "}
        <ShoppingBasketIcon size={20} color="white" />
        <span className=" ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavBarActions;
