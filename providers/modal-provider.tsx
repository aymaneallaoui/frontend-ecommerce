"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/ui/preview-modal";

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
