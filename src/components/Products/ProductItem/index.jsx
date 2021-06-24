import PropTypes from "prop-types";
import React from "react";
import "./ProductItem.scss";

ProductItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  status: PropTypes.string,

  handleEditItemById: PropTypes.func,
  handleDeleteItemById: PropTypes.func,
};

ProductItem.defaultProps = {
  id: 0,
  name: "",
  price: 0,
  status: false,

  handleEditItemById: null,
  handleDeleteItemById: null,
};

function ProductItem(props) {
  const { id, name, price, status, handleEditItemById, handleDeleteItemById } =
    props;

  const handleDelete = (id) => {
    handleDeleteItemById(id);
  };

  const handleEdit = (id) => {
    handleEditItemById(id);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price.toLocaleString()} VNĐ</td>
      <td>{status}</td>
      <td>
        <button className="btn btn-edit" onClick={() => handleEdit(id)}>
          Sửa
        </button>
        &nbsp;
        <button className="btn btn-delete" onClick={() => handleDelete(id)}>
          Xóa
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
