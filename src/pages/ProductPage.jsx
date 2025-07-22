import { useParams } from "react-router-dom";
import categories from "../data/subcategories.json";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import BackButton from "../components/BackButton"; // ✅ important!

const ProductPage = () => {
  const { subcategory } = useParams();
  const category = categories.find(cat => cat.href === subcategory);

  if (!category) {
    return (
      <div className="p-12 text-center text-red-600 text-2xl font-semibold">
        404 — Category Not Found 😵
      </div>
    );
  }

  const filteredProducts = products.filter(
    (product) => product.subcategory === category.name
  );

  return (
    <div className="bg-[#EDE0D4] min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <BackButton />
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#4B2E2E]">{category.name}</h1>
          <p className="text-[#4B2E2E]/80 text-lg mt-2">{category.description}</p>
          <div className="mt-4 text-[#4B2E2E]/60 italic text-sm">
            Showing {filteredProducts.length} items curated for your elegance ✨
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
