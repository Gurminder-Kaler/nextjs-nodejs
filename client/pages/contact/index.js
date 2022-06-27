import FrontEndLayout from "@/components/FrontEndLayout";
import { useState } from "react";

const contact = () => {
  const formState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [form, setForm] = useState(formState);

  const onSubmit = () => {
    console.log("data", JSON.stringify(form));
  };

  const handleNameChange = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  const handleSubjectChange = (e) => {
    setForm({ ...form, subject: e.target.value });
  };

  const handleMessageChange = (e) => {
    setForm({ ...form, message: e.target.value });
  };

  return (
    <FrontEndLayout>
      <div className="container-fluid my-5 mt-5 mx-5 px-5">
        <div className="columns">
          <div className="column is-6">
            <h2 className="title is-2 is-capitalized">Contact Us</h2>
            <form method="post">
              <div className="field">
                <label
                  htmlFor="name"
                  className="label is-size-4 has-text-weight-light"
                ></label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input"
                    placeholder="Enter the name"
                    value={form.name}
                    onChange={handleNameChange}
                  />
                  <span className="icon is-left">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label
                  htmlFor="email"
                  className="label is-size-4 has-text-weight-light"
                ></label>
                <div className="control has-icons-left">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input"
                    placeholder="Enter the email"
                    value={form.email}
                    onChange={handleEmailChange}
                  />
                  <span className="icon is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label
                  htmlFor="subject"
                  className="label is-size-4 has-text-weight-light"
                ></label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="input"
                    placeholder="Enter the subject"
                    value={form.subject}
                    onChange={handleSubjectChange}
                  />
                  <span className="icon is-left">
                    <i className="fa fa-question"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label
                  htmlFor="message"
                  className="label is-size-4 has-text-weight-light"
                ></label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  className="textarea is-medium"
                  placeholder="Enter the message"
                  onChange={handleMessageChange}
                  value={form.message}
                ></textarea>
              </div>
              <button
                type="button"
                onClick={onSubmit}
                className="button is-success is-size-5"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="column is-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.148320545008!2d-79.76146598450119!3d43.68667977912011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b1596f9574643%3A0xad7612fc9befe7ad!2sAlgoma%20University!5e0!3m2!1sen!2sca!4v1654985456152!5m2!1sen!2sca"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </FrontEndLayout>
  );
};

export default contact;
