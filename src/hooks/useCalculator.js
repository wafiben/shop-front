import { useEffect, useState } from "react";

const useCalculateTotal = (products) => {
  const [total, setTotal] = useState(0);

  const calculateTotalSum = () => {
    if (products && products.length > 0) {
      const totalSum = products.reduce((accumulator, product) => {
        return accumulator + product.sum;
      }, 0);
      setTotal(totalSum);
    } else {
      setTotal(0); // Set total to 0 if there are no products
    }
  };

  useEffect(() => {
    calculateTotalSum();
  }, [products]);

  return total;
};

export default useCalculateTotal;
