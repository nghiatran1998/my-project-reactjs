import apiCaller from "../utils/apiCaller";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProductsApi = createAsyncThunk(
  "products/fetchProductsApi",
  async () => {
    const response = await apiCaller("", "get", null).then((res) => res.data);
    return response;
  }
);

const initialState = {
  list: [],
  status: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItem(state, action) {
      const data = action.payload;
      apiCaller("", "post", data)
        .then((res) => {
          alert("Thêm thành công");
        })
        .catch((error) => {
          alert("Đã xảy ra lỗi:", error);
        });
    },
    editItem(state, action) {
      console.log("Redux Edit by id: ", action.payload);
    },
    removeItem(state, action) {
      const id = action.payload;
      // Xóa trên API
      apiCaller(id, "delete", null);
      // Xóa trên Redux
      for (var i = 0; i < state.list.length; i++) {
        if (state.list[i]["id"] === id) {
          state.list.splice(i, 1);
        }
      }
    },
  },
  extraReducers: {
    [fetchProductsApi.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProductsApi.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [fetchProductsApi.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { addItem, editItem, removeItem } = productsSlice.actions;
export default productsSlice.reducer;
