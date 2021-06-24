import React from "react";
import ProductList from "../../components/Products/ProductList";
import "./ProductsPage.scss";
import { Link } from "react-router-dom";

ProductsPage.propTypes = {};

function ProductsPage() {
  return (
    <div>
      <h1>Đây là trang quản lý sản phẩm</h1>

      <ProductList />

      <button className="btn-add">
        <Link className="btn-add-link" to="/product-action">
          Thêm sản phẩm
        </Link>
      </button>
    </div>
  );
}

export default ProductsPage;
