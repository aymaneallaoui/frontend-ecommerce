import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import { ProductList } from "@/components/product-list";
import React from "react";
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  const billboards = await getBillboards(
    "23eb177e-76f8-4ecb-9003-5fe1564b6dc6"
  );
  return (
    <Container>
      <div className=" space-y-10 pb-10">
        <Billboard data={billboards} />

        <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
