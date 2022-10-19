import React, { memo, useCallback, useEffect, useState } from "react";
import { IAppProps } from "../App";
import { IProduct } from "../common/type";
import ProductList from "../components/ProductList";

const Main = memo(({ productController }: IAppProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const readProducts = useCallback(async () => {
    const response = await productController.getProducts();
    setProducts(response.data);
  }, [productController]);

  useEffect(() => {
    readProducts();
  }, [readProducts]);

  return (
    <>
      <main>
        <div className="max-w-2xl py-40 mx-auto">
          <div className="max-w-lg p-4 mx-auto bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                가을맞이 신규 상품 목록
              </h3>
              <button className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                View all
              </button>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {products.map((product) => {
                  // 아래 주석을 풀면 서버에서 가져오는 데이터를 확인 할 수 있어요
                  console.log("product", product);
                  const { id, ...item } = product;
                  return (
                    <React.Fragment key={id}>
                      <ProductList {...item} />
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
});

export default Main;
