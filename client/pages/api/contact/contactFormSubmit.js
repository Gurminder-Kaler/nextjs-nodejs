import axios from "axios";

export default async function (req, res) {
  await axios
    .post(process.env.API_URL + "/contact/contactFormSubmit", req.body)
    .then((result) => {
      console.log('result contactFormSubmit', result);
      return res.json({
        status: result.data.status,
        data: result.data.data,
        success: result.data.success,
        message: result.data.message,
      });
    })
    .catch((err) => {
      console.log("client api /contactFormSUbmit ", err);
    });
}
