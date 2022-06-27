import axios from "axios";
import { useRouter } from "next/router";
const router = useRouter();
const registerHandler = async (e, data) => {
  e.preventDefault();
  try {
      //node js call
    const res = await axios.post(process.env.API_URL + "/api/auth/register", data).then();
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export default registerHandler;