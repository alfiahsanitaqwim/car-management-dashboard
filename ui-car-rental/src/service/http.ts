import axios from "axios";

interface PropsGet {
    url: string,
    callback: any
}

const BASE_URL = "http://localhost:3000/v1"
const HTTP = {
  Get: async ({ url, callback }: PropsGet) => {
    try {
      const response = await axios.get(BASE_URL + url);
      const data = response.data?.data;
      callback(data);
    } catch (error) {
      console.error(error);
    }
  }
};

export default HTTP;
