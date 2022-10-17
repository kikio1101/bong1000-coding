import { memo } from "react";
import { ClothingType } from "../common/type";

export interface ProductListProps {
  name: string;
  type: ClothingType;
  color: string;
  price: number;
}

const ProductList = memo(({ name, type, color, price }: ProductListProps) => {
  const matchImg = (type: ClothingType) => {
    let imgURl = "";
    switch (type) {
      case "pants":
        imgURl = "pants-icon.png";
        break;
      case "cap":
        imgURl = "cap-icon.png";
        break;
      case "shirt":
        imgURl = "shirt-icon.png";
        break;
      default:
        imgURl = "default-icon.png";
    }
    return `img/${imgURl}`;
  };

  return (
    <>
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 bg-white">
            <img
              className="w-8 h-8 rounded-full"
              src={matchImg(type)}
              alt="clothing-icon"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              <b className="text-[#22e997] pr-1.5">&#91;{color}&#93;</b> {name}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {price}
          </div>
        </div>
      </li>
    </>
  );
});

export default ProductList;
