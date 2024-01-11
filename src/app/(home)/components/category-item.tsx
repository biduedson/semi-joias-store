import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON, Categories } from "@/data/data";

interface CategoryItemsProps {
  category: Categories;
  adtionalClass:string;
}

const CategoryItem = ({ category, adtionalClass }: CategoryItemsProps) => {
  return (
    <Badge
      variant="outline"
      className={`flex items-center justify-center gap-2 py-3 cursor-pointer ${adtionalClass}`}>
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
