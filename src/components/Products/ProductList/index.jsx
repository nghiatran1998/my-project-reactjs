import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editItem,
  fetchProductsApi,
  removeItem,
} from "../../../app/productsSlice";
import ProductItem from "../ProductItem";
import "./ProductList.scss";

ProductList.propTypes = {};

function ProductList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsApi());
  }, [dispatch]);

  const productsList = useSelector((state) => state.products.list);

  // Hiển thị tất cả sản phẩm
  const showItems = (items) => {
    var result = null;
    if (items.length > 0) {
      result = items.map((item, index) => (
        <ProductItem
          key={index}
          id={item.id}
          name={item.name}
          price={item.price}
          status={item.status ? "Còn hàng" : "Hết hàng"}
          handleEditItemById={handleEditItemById}
          handleDeleteItemById={handleDeleteItemById}
        />
      ));
    }
    return result;
  };

  // Sửa sản phẩm
  const handleEditItemById = (id) => {
    const action = editItem(id);
    dispatch(action);
  };

  // Xóa sản phẩm
  const handleDeleteItemById = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa không ?")) {
      const action = removeItem(id);
      dispatch(action);
    }
  };

  return (
    <table
      className={productsList.length > 0 ? "products-table" : "hidden-table"}
    >
      <caption>
        <h2>Danh sách sản phẩm</h2>
      </caption>
      <thead>
        <tr>
          <th>Mã sản phẩm</th>
          <th>Tên</th>
          <th>Giá</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
      </thead>

      <tbody>{showItems(productsList)}</tbody>
    </table>
  );
}

export default ProductList;
