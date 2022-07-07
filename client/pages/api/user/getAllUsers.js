import axios from "axios";

export default async function (req, res) {
  await axios
    .post(process.env.API_URL + "/user/getAllUsers")
    .then((result) => {
      console.log('result get all users file', result);
      return res.json({
        status: result.data.status,
        data: result.data.data,
        success: result.data.success,
        message: result.data.message,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
}
