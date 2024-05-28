import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import { Filter } from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import NoResults from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const Products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className=" px-4 sm:px-0 pb-24">
          <div className=" lg:grid lg:grid-cols-5 lg:gap-x-4">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className=" hidden lg:block">
              <Filter valueKey="sizeId" name="sizes" data={sizes} />
              <Filter valueKey="colorId" name="color" data={colors} />
            </div>
            <div className=" mt-6 lg:col-span-4 lg:mt-0">
              {Products.length === 0 && <NoResults />}
              <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {Products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
