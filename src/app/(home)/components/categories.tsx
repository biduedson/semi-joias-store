import { categoriesData } from "@/data/data";
import CategoryItem from "./category-item";

const Categories = () => {
  return (
    <section className=" grid grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-5">
      {categoriesData.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </section>
  );
};

export default Categories;
