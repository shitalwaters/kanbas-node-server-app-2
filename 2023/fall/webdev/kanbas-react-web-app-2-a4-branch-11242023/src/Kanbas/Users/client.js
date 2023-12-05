import axios from "axios";

export const USERS_API = process.env.REACT_APP_API_URL;

export const signin = async (user) => {  };

export const updateUser = async (user) => {
    const response = await axios.put(`${USERS_API}/${user._id}`, user);
    return response.data;
  };
  
export const account = async () => {
const response = await axios.post(`${USERS_API}/account`);
  return response.data;
};

