import axiosClient from "../config/axiosConfig";

const getNewsBlogSalesPosts = async () => {
  try {
    const response = await axiosClient.get("/api/v1/news-blog-sales");
    return response;
  } catch (error) {
    console.error("Error fetching news/blog sales posts:", error);
    throw error;
  }
};

const createNewsBlogSalesPost = async (
  requesterId,
  {
    title,
    url
  }
) => {
  try {
    const response = await axiosClient.post(`/api/v1/admin/accounts/news?requesterId=${requesterId}`, {
      title,
      url
    });
    return response;
  } catch (error) {
    console.error("Error creating news/blog sales post:", error);
    throw error;
  }
};


export { getNewsBlogSalesPosts, createNewsBlogSalesPost };