
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/lib/data';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className="category-card cursor-pointer">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="text-4xl mb-3">{category.icon}</div>
        <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
        <p className="text-sm text-gray-500">{category.count} jobs</p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
