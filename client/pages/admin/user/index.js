import BackEndLayout from "@/components/backend/BackEndLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { getAllUsersAction } from "@/store/actions/userAction";

export const user = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllUsersAction(dispatch);
  }, []);
  const k  = useSelector((state)=> console.log('stated', state));
  const data = useSelector((state) => state.user.users);

  const [users, setUsers] = useState([]);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Created At",
      selector: (row) => row.createdAt,
    },
  ];

  useEffect(() => {
    setUsers(data);
    console.log("users", users);
  }, [data]);

  return (
    <BackEndLayout>
      <DataTable pagination columns={columns} data={users} selectableRows />
    </BackEndLayout>
  );
};
export default user;
