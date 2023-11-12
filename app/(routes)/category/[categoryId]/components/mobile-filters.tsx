"use client";

import { Color, Size } from "@/types";
import { Plus, X } from "lucide-react";

import Button from "@/components/ui/button";
import { Dialog } from "@headlessui/react";
import { Filter } from "./filter";
import IconButton from "@/components/ui/icon-button";
import { useState } from "react";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        className=" flex items-center gap-x-2 lg:hidden ml-4"
        onClick={onOpen}
      >
        Filters <Plus size={20} />{" "}
      </Button>

      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className=" relative z-40 lg:hidden"
      >
        <div className=" bg-black bg-opacity-25 inset-0 fixed  backdrop-blur-sm">
          <div className=" fixed inset-0 z-40 flex">
            <Dialog.Panel className=" bg-white w-full max-w-xs shadow-xl  relative ml-auto h-full flex-col overflow-y-auto py-4 pb-6 flex  ">
              <div className=" flex items-center justify-end px-4">
                <IconButton icon={<X />} onClick={onClose} />
              </div>

              <div className=" p-4">
                <Filter valueKey="sizeId" name="sizes" data={sizes} />
                <Filter valueKey="colorId" name="color" data={colors} />
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
