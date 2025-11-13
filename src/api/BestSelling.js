import axiosClient from "../config/axiosConfig";

// Temporary mock data for preview. Uncomment to use mock instead of real API:
const mockBestSelling = [
  { id: '1', name: 'Cat Bowl',         price: '20.99', image: '/images/best/cat-bowl.jpg',      status: true },
  { id: '2', name: 'Premium Cat Food', price: '19.99', image: '/images/best/cat-food.jpg',      status: true },
  { id: '3', name: 'Dog Leash',        price: '9.99',  image: '/images/best/dog-leash.jpg',     status: true },
  { id: '4', name: 'Dog Bowl',         price: '19.99', image: '/images/best/dog-bowl.jpg',      status: true },
];
export async function getBestSellingProducts() {
  return new Promise(resolve => setTimeout(() => resolve(mockBestSelling), 300));
}

// Uncomment to use real API instead of mock data
// export async function getBestSellingProducts() {
//   const response = await axiosClient.get('/api/best-selling');
//   return response;
// }
