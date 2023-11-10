"use client";

import { useEffect, useState } from "react";

import { formatter } from "@/utils/lib";

interface CurrencyProps {
  value: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className=" font-semibold">{formatter.format(Number(value))}</div>
  );
};

export default Currency;
