import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../app/productsSlice";
import "./ProductForm.scss";

ProductForm.propTypes = {};

function ProductForm() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    status: false,
  });

  const { name, price, status } = product;

  // Thay đổi state khi người dùng nhập dữ liệu
  const handleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    setProduct({ ...product, [name]: value });
  };

  // Thêm sản phẩm
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = {
      ...product,
      price: parseInt(price),
    };
    const action = addItem(formValue);
    dispatch(action);
    handleReset();
  };

  // Reset state
  const handleReset = () => {
    setProduct({
      name: "",
      price: "",
      status: false,
    });
  };

  // Hủy
  const handleCancel = () => {
    if (window.confirm("Bạn có chắc chắn muốn hủy không ?")) {
      handleReset();
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <table className="product-table">
        <tbody>
          <tr>
            <td>
              <label>Tên sản phẩm:</label>
            </td>
            <td>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Nhập tên sản phẩm tại đây"
                required
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>Giá:</label>
            </td>
            <td>
              <input
                type="number"
                name="price"
                value={price}
                onChange={handleChange}
                placeholder="Nhập giá sản phẩm tại đây"
                required
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>Còn hàng</label>
            </td>
            <td>
              <input
                type="checkbox"
                name="status"
                value={status}
                onChange={handleChange}
              />
            </td>
          </tr>

          <tr>
            <td>
              <button className="btn btn-submit" type="submit">
                Thêm sản phẩm
              </button>
            </td>
            <td>
              <button
                className="btn btn-reset"
                type="reset"
                onClick={handleCancel}
              >
                Hủy
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default ProductForm;
