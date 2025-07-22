import { ArrowRight, Sparkles } from "lucide-react";
import categories from "../data/subcategories.json";
import SubcategoryCard from "../components/SubCatogry";
import Popup from "./MainPopUp";

const SubCatogryGrid = () => {
  return (
    <section className="py-12 px-6 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col items-center gap-2 relative">
          <div className="flex items-center gap-3">
            <div className="bg-[#4B2E2E]/90 backdrop-blur-sm rounded-full p-2 shadow">
              <Sparkles className="w-5 h-5 text-[#F2E8DC]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#4B2E2E] text-center">
              Shop by Category
            </h2>

            <div className="bg-[#4B2E2E]/90 backdrop-blur-sm rounded-full p-2 shadow">
              <Sparkles className="w-5 h-5 text-[#F2E8DC]" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center">
          {categories.map((category, index) => (
            <SubcategoryCard
              key={index}
              title={category.name}
              description={category.description}
              itemCount={category.itemCount}
              imageUrl={category.imageUrl}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubCatogryGrid;
