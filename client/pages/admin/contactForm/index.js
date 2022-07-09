import BackEndLayout from "@/components/backend/BackEndLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { getAllContactFormsAction } from "@/store/actions/generalAction";
import Loader from "@/components/loader/loader";

export const newsletter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllContactFormsAction(dispatch);
  }, []);

  const data = useSelector((state) => state.contact.contactForms);

  const [contactForms, setContactForms] = useState([]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
    },
    {
      name: "Message",
      selector: (row) => row.message,
    },
    {
      name: "Reply",
      selector: (row) => row.reply,
    },
    {
      name: "Replied At",
      selector: (row) => row.repliedAt,
    },
    {
      name: "Created At",
      selector: (row) => row.createdAt,
    },
  ];
  useEffect(() => {
    setContactForms(data);
  }, [data]);

  return (
    <BackEndLayout>
      {contactForms && contactForms.length > 0 ? (
        <DataTable
          columns={columns}
          data={contactForms}
          selectableRows
          pagination
        />
      ) : (
        <Loader />
      )}
    </BackEndLayout>
  );
};
export default newsletter;
