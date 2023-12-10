import axios from "axios";
import { TOKEN } from "../config/token";

interface PropsGet {
  url: string;
  callback: any;
}
interface PropsPost extends PropsGet {
  body: any;
}

const BASE_URL = "http://localhost:3000/v1";
const HTTP = {
  Get: async ({ url, callback }: PropsGet) => {
    try {
      const response = await axios.get(BASE_URL + url);
      const data = response.data?.data;
      callback(data);
    } catch (error) {
      console.error(error);
    }
  },
  Post: async ({ url, body, callback }: PropsPost) => {
    await axios
      .post(BASE_URL + url, body, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(({ data }: any) => {
        callback(data?.data);
      })
      .catch((z: any) => {
        console.error(z);
      });
  },
  Put: async ({ url, body, callback }: PropsPost) => {
    await axios
      .post(BASE_URL + url, body, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(({ data }: any) => {
        callback(data?.data);
      })
      .catch((z: any) => {
        console.error(z);
      });
  },
};

export default HTTP;
