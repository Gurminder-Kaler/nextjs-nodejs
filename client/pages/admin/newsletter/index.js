import BackEndLayout from "@/components/backend/BackEndLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { getAllNewsletterEmailsAction } from "@/store/actions/newsletterAction";

export const newsletter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllNewsletterEmailsAction(dispatch);
  }, []);

  const data = useSelector((state) => state.newsletter.newsletterEmails);

  const [newsletterEmails, setNewsletterEmails] = useState([]);

  const columns = [
    {
      name: "Email",
      selector: (row) => row.newsletterEmail,
    },
    {
      name: "Subscribed",
      selector: (row) => (row.subscribed ? "Yes" : "No"),
    },
    {
      name: "Subscribed At",
      selector: (row) => row.createdAt,
    },
  ];
  useEffect(() => {
    setNewsletterEmails(data);
  }, [data]);

  return (
    <BackEndLayout>
      <DataTable columns={columns} data={newsletterEmails} selectableRows pagination />
    </BackEndLayout>
  );
};
export default newsletter;
