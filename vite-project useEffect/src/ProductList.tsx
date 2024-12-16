import { useEffect, useState } from "react";

interface Props {
  category: string;
}

const ProductList = ({ category }: Props) => {
  //  just below code is for demo purposes
  const [products, setProducts] = useState<string[]>([]);
  //using the effect hook to call the server to fetch products

  useEffect(() => {
    console.log("Fetching products", category);
    //below code is just for demo
    setProducts(["clothing", "household"]);
  }, [category]);

  return <div>products</div>;
};

export default ProductList;
