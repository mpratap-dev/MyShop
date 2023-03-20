import axios from "axios";

export const getProducts = async (body: { limit: number, skip: number }) => {
  const response = await axios.get(`https://dummyjson.com/products`, { params:  body });
  return response.data;
}

export const getProduct = async (postId: number) => {
  const response = await axios.get(`https://dummyjson.com/products/${postId}`);
  return response.data
}
