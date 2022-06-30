import axios from "axios";

export default async function (req, res) {
  await axios
    .post(process.env.API_URL + "/auth/login", req.body)
    .then((result) => {
      console.log("SUPER RESULT", result.data);
      return res.json({
        status: result.data.status,
        token: result.data.token,
        user: result.data.data,
        success: result.data.success,
        message: result.data.message,
      });
    })
    .catch((err) => {
      console.log("ERROR : ", err);
    });
}
