import Container from "@/components/ui/container";
import Gallery from "@/components/gallery/gallery";
import Info from "@/components/info";
import { ProductList } from "@/components/product-list";
import React from "react";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";

interface ProductPageProps {
  params: {
    productId: string;
  };
}
const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);

  const suggestProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className=" bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className=" lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-0">
            <Gallery images={product.images} />
            <div className=" mt-10 px-4 sm:mt-16  sm:px-0 lg:mt-0 ml-10">
              {" "}
              <Info data={product} />
            </div>
          </div>
          <div className="my-10">
            <ProductList title="Releated items" items={suggestProducts} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
