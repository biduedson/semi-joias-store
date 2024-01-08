import { Badge } from "@/components/ui/badge";
import { Categories } from "@/data/data";

interface CategoryItemsProps {
  category: Categories;
}

const CategoryItem = ({ category }: CategoryItemsProps) => {
  return (
    <Badge
      variant="outline"
      className="flex items-center justify-center gap-2 py-3"
    >
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
