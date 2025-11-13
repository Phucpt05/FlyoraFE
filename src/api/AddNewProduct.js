import axiosClient from "../config/axiosConfig";

export const addNewProduct = async (
  {
    name,
    description,
    price,
    stock,
    categoryId,
    birdTypeId,
    material,
    origin,
    usageTarget,
    weight,
    color,
    dimensions,
    imageUrl,
  }
) => {
  try {
    const response = await axiosClient.post(
      "/api/v1/owner/products",
      {
        name,
        description,
        price,
        stock,
        categoryId,
        birdTypeId,
        material,
        origin,
        usageTarget,
        weight,
        color,
        dimensions,
        imageUrl,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
