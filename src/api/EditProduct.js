import axiosClient from "../config/axiosConfig";

export const editProduct = async (
  {
    id,
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
    const response = await axiosClient.put(
      `/api/v1/owner/products/${id}`,
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
