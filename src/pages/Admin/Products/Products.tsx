import { useEffect, useState } from "react";
import api from "../../../api/axios";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  image: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProducts = async () => {
    try {
      const response = await api.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Products</h1>

      <div className="flex">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                ID
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                NAME
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                QUANTITY
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                CATEGORY
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item: Product) => (
              <tr className="even:bg-blue-gray-50/50" key={item.id}>
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.quantity}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4 flex gap-6">
                  <button className="bg-primary text-zinc-50 px-6 py-2 rounded">
                    Edit
                  </button>
                  <button className="border border-primary px-6 py-2 text-primary rounded">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
