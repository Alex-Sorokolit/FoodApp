import axios from "axios";
axios.defaults.baseURL =
  "https://food-delivery-backend-fl5s.onrender.com/api/v1";

export async function getAllShops() {
  try {
    const response = await axios.get(`/all-shops`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function register(credentials) {
  try {
    const response = await axios.post("/auth/register", credentials);
  } catch (error) {
    console.log(error.message);
  }
}
