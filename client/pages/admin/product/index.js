import BackEndLayout from "@/components/backend/BackEndLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { getAllProductsAction } from "@/store/actions/productAction";

export const product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProductsAction(dispatch);
  }, []);

  const data = useSelector((state) => state.product.products);

  const [products, setProducts] = useState([]);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Created At",
      selector: (row) => row.createdAt,
    },
  ];
  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <BackEndLayout>
      <DataTable columns={columns} data={products} selectableRows pagination />
    </BackEndLayout>
  );
};
export default product;
