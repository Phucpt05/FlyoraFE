import axiosClient from "../config/axiosConfig";

export const submitReview = async (reviewData) => {
  try {
    const response = await axiosClient.post("/api/v1/reviews/submit", {
      customerId: reviewData.customerId,
      productId: reviewData.productId,
      rating: reviewData.rating,
      comment: reviewData.comment
    });
    return response;
  } catch (error) {
    console.error("Error submitting review:", error);
    throw error;
  }
};

export const getReviewsByProductId = async (productId) => {
  try {
    const response = await axiosClient.get(`/api/v1/reviews/product/${productId}`);
    return response;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
}
